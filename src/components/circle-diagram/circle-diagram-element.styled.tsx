import styled from "styled-components";

interface CircleDiagramElementProps extends React.HTMLProps<HTMLDivElement> {
	rotateDeg: number;
}

export const CircleDiagramElement = styled.div<CircleDiagramElementProps>`
	position: absolute;
	left: calc(50% - 25px);
	top: calc(50% - 25px);
	height: 50px;
	width: 50px;
	transform: ${({ rotateDeg }) => `rotate(${rotateDeg}deg)`} translateX(250px)
		${({ rotateDeg }) => `rotate(-${rotateDeg}deg)`};
`;
// rotate, move in new direction, then derotate because you don't want rotated children
