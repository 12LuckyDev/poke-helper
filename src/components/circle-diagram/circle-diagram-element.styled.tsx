import styled from "styled-components";

export const CircleDiagramElement = styled.div<
	{ rotateDeg: number } & React.HTMLProps<HTMLDivElement>
>`
	position: absolute;
	left: calc(50% - 25px);
	top: calc(50% - 25px);
	height: 50px;
	width: 50px;
	border: 2px dotted #ffffff;
	border-radius: 50%;
	transform: ${({ rotateDeg }) => `rotate(${rotateDeg}deg)`} translateX(250px)
		${({ rotateDeg }) => `rotate(-${rotateDeg}deg)`};
`;
// rotate, move in new direction, then derotate because you don't want rotated children
