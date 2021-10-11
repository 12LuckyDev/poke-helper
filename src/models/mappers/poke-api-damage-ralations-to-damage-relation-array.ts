import { PokeApiType } from "..";
import { PokeApiDamageRelations } from "../poke-api/poke-api-damage-ralations";
import { DamageMultiplierType } from "../ui/damage-multiplier-type";
import { DamageRelation } from "../ui/damage-relation";

export const mapPokeApiDamageRelationsToDamageRelationArray = (
	input?: PokeApiDamageRelations
): DamageRelation[] => {
	const output: DamageRelation[] = [];

	const fillPerDamageType = (
		relations: PokeApiType[],
		multiplier: DamageMultiplierType,
		defence: boolean
	) => {
		if (relations.length > 0) {
			relations.forEach(({ name }) => {
				const existing = output.find(({ toType }) => toType === name);
				if (!existing) {
					if (defence) {
						output.push({
							toType: name,
							attackDamageMultiplier: null,
							defenceDamageMultiplier: multiplier,
						});
					} else {
						output.push({
							toType: name,
							attackDamageMultiplier: multiplier,
							defenceDamageMultiplier: null,
						});
					}
				} else {
					if (defence) {
						existing.defenceDamageMultiplier = multiplier;
					} else {
						existing.attackDamageMultiplier = multiplier;
					}
				}
			});
		}
	};

	if (input) {
		fillPerDamageType(input.double_damage_from, DamageMultiplierType.X2, true);
		fillPerDamageType(input.double_damage_to, DamageMultiplierType.X2, false);
		fillPerDamageType(input.half_damage_from, DamageMultiplierType.X1_2, true);
		fillPerDamageType(input.half_damage_to, DamageMultiplierType.X1_2, false);
		fillPerDamageType(input.no_damage_from, DamageMultiplierType.X0, true);
		fillPerDamageType(input.no_damage_to, DamageMultiplierType.X0, false);
	}

	return output;
};
