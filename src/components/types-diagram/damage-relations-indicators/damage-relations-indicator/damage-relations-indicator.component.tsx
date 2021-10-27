import { FC } from "react";
import { DamageRelation } from "../../../../models";
import {
	getDamageRelationString,
	getIconAndColor,
} from "../../type-diagram.utils";
import { DamageIndicatorWrapper } from "./damage-indicator-wrapper.styled";
import { DamageRelationsIndicatorBody } from "./damage-relations-indicator-body.styled";
import {
	IndicatorArrowLeft,
	IndicatorArrowRight,
} from "./indicator-arrows/indicator-arrows";

interface DamageIndicatorProps {
	relation: DamageRelation;
}

export const DamageAttackIndicator: FC<DamageIndicatorProps> = ({
	relation,
}) => {
	const { color } = getIconAndColor(relation.toType);
	const relationString = getDamageRelationString(
		relation.attackDamageMultiplier
	);

	return (
		<DamageIndicatorWrapper pushToEnd={true}>
			<DamageRelationsIndicatorBody backgroundColor={color}>
				<span> {relationString}</span>
			</DamageRelationsIndicatorBody>
			<IndicatorArrowRight backgroundColor={color} />
		</DamageIndicatorWrapper>
	);
};

export const DamageDefenceIndicator: FC<DamageIndicatorProps> = ({
	relation,
}) => {
	const { color } = getIconAndColor(relation.toType);
	const relationString = getDamageRelationString(
		relation.defenceDamageMultiplier
	);

	return (
		<DamageIndicatorWrapper>
			<IndicatorArrowLeft backgroundColor={color} />
			<DamageRelationsIndicatorBody backgroundColor={color}>
				<span> {relationString}</span>
			</DamageRelationsIndicatorBody>
		</DamageIndicatorWrapper>
	);
};
