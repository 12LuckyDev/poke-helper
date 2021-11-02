import {
	DamageMultiplierType,
	DamageRelation,
	PokeApiTypeFull,
} from "../../../../models";
import { ModeType } from "../consts/modes";
import { mapPokeApiDamageRelationsToDamageRelationArray } from "./poke-api-damage-ralations-to-damage-relation-array";

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
	selected: string[],
	mode: string
): DamageRelation[] => {
	const [firstType, secondType] = selected;

	if (mode) {
		const relations =
			mode === ModeType.DEFENCE
				? mergeDamageRelations(
						mapPokeApiDamageRelationsToDamageRelationArray(
							ModeType.DEFENCE,
							types.find((t) => t.name === firstType)?.damage_relations
						),
						mapPokeApiDamageRelationsToDamageRelationArray(
							ModeType.DEFENCE,
							types.find((t) => t.name === secondType)?.damage_relations
						)
				  )
				: mapPokeApiDamageRelationsToDamageRelationArray(
						ModeType.ATTACT,
						types.find((t) => t.name === firstType)?.damage_relations
				  );

		return relations.map((dmg) => ({
			...dmg,
			typeIndex: types.findIndex(({ name }) => name === dmg.toType),
		}));
	}
	return [];
};
