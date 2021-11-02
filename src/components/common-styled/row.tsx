import styled from "styled-components";

interface RowProps extends React.HTMLProps<HTMLDivElement> {
	setHeight?: string;
	minHeight?: string;
	maxHeight?: string;
	center?: boolean;
}

export const Row = styled.div<RowProps>`
	display: flex;
	${({ center }) => center && `justify-content: center;`}
	${({ setHeight }) => setHeight && `height: ${setHeight};`}
	${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
	${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
`;
