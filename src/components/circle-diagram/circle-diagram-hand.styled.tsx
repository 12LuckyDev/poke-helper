import styled from "styled-components";
import { CircleDiagramRotableProps } from "./common/circle-diagram-rotable.props";
import { calcRotateDeg } from "./common/circle-diagram-rotable.utils";

export const CircleDiagramHand = styled.div<CircleDiagramRotableProps>`
	--wrapper-height: 40px;
	--wrapper-width: calc(38% - var(--element-size));

	width: var(--wrapper-width);
	height: var(--wrapper-height);
	position: absolute;
	left: calc(50% - var(--wrapper-width) / 2);
	top: calc(50% - var(--wrapper-height) / 2);

	--center-size: calc(var(--size) * 0.24);

	transform: ${({ step, index }) => `rotate(${calcRotateDeg(step, index)}deg)`}
		translateX(calc(var(--center-size) + (50% - var(--center-size) / 2)));

	display: flex;
	flex-direction: column;
	justify-content: center;
`;
