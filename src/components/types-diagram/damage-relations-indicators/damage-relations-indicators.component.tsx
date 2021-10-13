import { FC } from "react";
import { DamageRelation } from "../../../models";
import {
	DamageAttackIndicator,
	DamageDefenceIndicator,
} from "./damage-relations-indicator/damage-relations-indicator.component";

interface DamageRelationsIndicatorProps {
	relation: DamageRelation;
}

export interface IndicatorProps extends React.HTMLProps<HTMLDivElement> {
	backgroundColor: string;
}

export const DamageRelationsIndicators: FC<DamageRelationsIndicatorProps> = ({
	relation,
}) => {
	return (
		<>
			{relation.defenceDamageMultiplier !== null && (
				<DamageDefenceIndicator relation={relation} />
			)}
			{relation.attackDamageMultiplier !== null && (
				<DamageAttackIndicator relation={relation} />
			)}
		</>
	);
};
