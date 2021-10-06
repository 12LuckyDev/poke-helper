import { FC } from "react";
import styled from "styled-components";
import { Row } from "../../common-styled";
import {
	DamageRelationsIndicatorArrowLeft,
	DamageRelationsIndicatorArrowRight,
} from "./damage-relations-indicator.arrow";
import { DamageRelationsIndicatorBody } from "./damage-relations-indicator.body.styled";

interface DamageRelationsIndicatorProps {
	direction: "right" | "left";
}

const ArrowWrapper = styled.div`
	--arrow-margin: 2px;
	--arrow-size: calc(var(--wrapper-height) / 2 - var(--arrow-margin) * 2);

	display: flex;
`;

export const DamageRelationsIndicator: FC<DamageRelationsIndicatorProps> = ({
	children,
	direction,
}) => {
	return (
		<ArrowWrapper>
			{direction === "left" && (
				<>
					<DamageRelationsIndicatorArrowLeft />
					<DamageRelationsIndicatorBody>
						{children}
					</DamageRelationsIndicatorBody>
				</>
			)}
			{direction === "right" && (
				<>
					<DamageRelationsIndicatorBody>
						{children}
					</DamageRelationsIndicatorBody>
					<DamageRelationsIndicatorArrowRight />
				</>
			)}
		</ArrowWrapper>
	);
};
