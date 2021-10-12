import { DamageMultiplierType } from "./damage-multiplier-type";

export interface DamageRelation {
	toType: string;
	attackDamageMultiplier: DamageMultiplierType | null;
	defenceDamageMultiplier: DamageMultiplierType | null;
	typeIndex?: number;
}
