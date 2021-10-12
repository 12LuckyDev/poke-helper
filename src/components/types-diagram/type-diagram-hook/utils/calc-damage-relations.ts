import {
	DamageMultiplierType,
	DamageRelation,
	mapPokeApiDamageRelationsToDamageRelationArray,
	PokeApiTypeFull,
} from "../../../../models";

const mergeMultipliers = (
	first: DamageMultiplierType | null,
	second: DamageMultiplierType | null
) => {
	const combinedMultiplier = (first ?? 1) * (second ?? 1);
	return combinedMultiplier !== 1
		? (combinedMultiplier as DamageMultiplierType)
		: null;
};

const mergeDamageRelations = (
	firstType: DamageRelation[],
	secondType: DamageRelation[]
): DamageRelation[] => {
	const bothTypes = [...firstType];

	secondType.forEach((secondTypeRelation) => {
		const firstTypeRelation = bothTypes.find(
			({ toType }) => toType === secondTypeRelation.toType
		);
		if (firstTypeRelation) {
			firstTypeRelation.attackDamageMultiplier = mergeMultipliers(
				firstTypeRelation.attackDamageMultiplier,
				secondTypeRelation.attackDamageMultiplier
			);
			firstTypeRelation.defenceDamageMultiplier = mergeMultipliers(
				firstTypeRelation.defenceDamageMultiplier,
				secondTypeRelation.defenceDamageMultiplier
			);
		} else {
			bothTypes.push(secondTypeRelation);
		}
	});
	return bothTypes.filter(
		(t) =>
			t.attackDamageMultiplier !== null || t.defenceDamageMultiplier !== null
	);
};

export const calcDamageRelations = (
	types: PokeApiTypeFull[],
	selected: string[]
): DamageRelation[] => {
	const [firstType, secondType] = selected;

	return mergeDamageRelations(
		mapPokeApiDamageRelationsToDamageRelationArray(
			types.find((t) => t.name === firstType)?.damage_relations
		),
		mapPokeApiDamageRelationsToDamageRelationArray(
			types.find((t) => t.name === secondType)?.damage_relations
		)
	).map((dmg) => ({
		...dmg,
		typeIndex: types.findIndex(({ name }) => name === dmg.toType),
	}));
};
