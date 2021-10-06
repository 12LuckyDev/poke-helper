import styled from "styled-components";
import { CircleDiagramRotableProps } from "./common/circle-diagram-rotable.props";
import { calcRotateDeg } from "./common/circle-diagram-rotable.utils";

export const CircleDiagramIndicator = styled.div<CircleDiagramRotableProps>`
	--wrapper-height: 40px;

	position: absolute;
	left: 62%;
	top: calc(50% - 20px);
	width: calc(38% - 50px);
	height: var(--wrapper-height);
	transform: ${({ step, index }) => `rotate(${calcRotateDeg(step, index)}deg)`};
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
