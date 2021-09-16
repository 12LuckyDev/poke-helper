import styled from "styled-components";

interface CircleDiagramElementProps extends React.HTMLProps<HTMLDivElement> {
	rotateDeg: number;
}

export const CircleDiagramElement = styled.div<CircleDiagramElementProps>`
	--element-size: 50px;
	position: absolute;
	left: calc(50% - 25px);
	top: calc(50% - 25px);
	height: var(--element-size);
	width: var(--element-size);
	transform: ${({ rotateDeg }) => `rotate(${rotateDeg}deg)`}
		translateX(calc((var(--size) - var(--element-size)) / 2))
		${({ rotateDeg }) => `rotate(-${rotateDeg}deg)`};
`;
// rotate, move in new direction, then derotate because you don't want rotated children
