import styled from "styled-components";

interface DiagramSelectedTypeElementProps
	extends React.HTMLProps<HTMLDivElement> {
	backgroundColor: string;
}

export const DiagramSelectedTypeElement = styled.div<DiagramSelectedTypeElementProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	background-color: ${({ backgroundColor }) => backgroundColor};
	font-size: 1.6rem;
	text-transform: capitalize;
	font-weight: bold;

	@media (min-width: 768px) {
		font-size: 2.5rem;
	}
`;
