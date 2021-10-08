import styled, { css } from "styled-components";
import { CircleDiagramRotableProps } from "./common/circle-diagram-rotable.props";
import { calcRotateDeg } from "./common/circle-diagram-rotable.utils";

const getTransformCSS = (step: number, index: number) => {
	const rotateDeg = calcRotateDeg(step, index);
	return css`
		transform: rotate(${rotateDeg}deg)
			translateX(calc((var(--size) - var(--element-size)) / 2))
			rotate(-${rotateDeg}deg);
	`;
};

export const CircleDiagramElement = styled.div<CircleDiagramRotableProps>`
	position: absolute;
	left: calc(50% - 25px);
	top: calc(50% - 25px);
	height: var(--element-size);
	width: var(--element-size);
	${({ step, index }) => getTransformCSS(step, index)}
`;
// rotate, move in new direction, then derotate because you don't want rotated children
