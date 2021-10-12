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
	const firstMultiplier: number = first ?? 1;
	const secondMultiplier: number = second ?? 1;
	const combinedMultiplier = firstMultiplier * secondMultiplier;
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

	let firstTypeResult: DamageRelation[] = [];
	if (!!firstType) {
		firstTypeResult = mapPokeApiDamageRelationsToDamageRelationArray(
			types.find((t) => t.name === firstType)?.damage_relations
		);
	}

	if (!!secondType) {
		const secondTypeResult = mapPokeApiDamageRelationsToDamageRelationArray(
			types.find((t) => t.name === secondType)?.damage_relations
		);
		return mergeDamageRelations(firstTypeResult, secondTypeResult);
	}

	return firstTypeResult;
};
