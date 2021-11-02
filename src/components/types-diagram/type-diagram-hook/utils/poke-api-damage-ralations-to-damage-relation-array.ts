import { PokeApiType } from "../../../../models";
import { PokeApiDamageRelations } from "../../../../models/poke-api/poke-api-damage-ralations";
import { DamageMultiplierType } from "../../../../models/ui/damage-multiplier-type";
import { DamageRelation } from "../../../../models/ui/damage-relation";
import { ModeType } from "../consts/modes";

export const mapPokeApiDamageRelationsToDamageRelationArray = (
	mode: ModeType,
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
		if (mode === ModeType.ATTACT) {
			fillPerDamageType(input.double_damage_to, DamageMultiplierType.X2, false);
			fillPerDamageType(input.half_damage_to, DamageMultiplierType.X1_2, false);
			fillPerDamageType(input.no_damage_to, DamageMultiplierType.X0, false);
		} else {
			fillPerDamageType(
				input.double_damage_from,
				DamageMultiplierType.X2,
				true
			);
			fillPerDamageType(
				input.half_damage_from,
				DamageMultiplierType.X1_2,
				true
			);
			fillPerDamageType(input.no_damage_from, DamageMultiplierType.X0, true);
		}
	}

	return output;
};
