import { FC } from "react";
import styled from "styled-components";
import { Shield, Sword } from "../../../../icons";
import { DamageRelation } from "../../../../models";
import {
	DamageRelationsIndicatorArrowLeft,
	DamageRelationsIndicatorArrowRight,
} from "./damage-relations-indicator.arrow";
import { DamageRelationsIndicatorBody } from "./damage-relations-indicator.body.styled";

interface DamageIndicatorProps {
	relation: DamageRelation;
}

const ArrowWrapper = styled.div`
	--arrow-margin: 2px;
	--arrow-size: calc(var(--wrapper-height) / 2 - var(--arrow-margin) * 2);

	display: flex;

	svg {
		filter: invert(100%);
	}
`;

export const DamageAttackIndicator: FC<DamageIndicatorProps> = ({
	relation,
}) => {
	return (
		<ArrowWrapper>
			<DamageRelationsIndicatorBody>
				<Sword />
			</DamageRelationsIndicatorBody>
			<DamageRelationsIndicatorArrowRight />
		</ArrowWrapper>
	);
};

export const DamageDefenceIndicator: FC<DamageIndicatorProps> = ({
	relation,
}) => {
	return (
		<ArrowWrapper>
			<DamageRelationsIndicatorArrowLeft />
			<DamageRelationsIndicatorBody>
				<Shield />
			</DamageRelationsIndicatorBody>
		</ArrowWrapper>
	);
};
