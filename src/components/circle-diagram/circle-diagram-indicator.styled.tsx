import styled from "styled-components";
import { CircleDiagramRotableProps } from "./common/circle-diagram-rotable.props";
import { calcRotateDeg } from "./common/circle-diagram-rotable.utils";

export const CircleDiagramIndicator = styled.div<CircleDiagramRotableProps>`
	position: absolute;
	left: 50%;
	top: calc(50% - 20px);
	width: calc(50% - 50px);
	height: 40px;
	border: solid #ffffff 2px;
	transform: ${({ step, index }) => `rotate(${calcRotateDeg(step, index)}deg)`};
`;
