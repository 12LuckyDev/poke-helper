import { FC } from "react";
import { Shield, Sword } from "../../../../icons";
import { DamageRelation } from "../../../../models";
import { getIconAndColor } from "../../type-diagram.utils";
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

	return (
		<DamageIndicatorWrapper>
			<DamageRelationsIndicatorBody backgroundColor={color}>
				<Sword />
			</DamageRelationsIndicatorBody>
			<IndicatorArrowRight backgroundColor={color} />
		</DamageIndicatorWrapper>
	);
};

export const DamageDefenceIndicator: FC<DamageIndicatorProps> = ({
	relation,
}) => {
	const { color } = getIconAndColor(relation.toType);

	return (
		<DamageIndicatorWrapper>
			<IndicatorArrowLeft backgroundColor={color} />
			<DamageRelationsIndicatorBody backgroundColor={color}>
				<Shield />
			</DamageRelationsIndicatorBody>
		</DamageIndicatorWrapper>
	);
};
