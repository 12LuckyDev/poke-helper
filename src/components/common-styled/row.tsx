import styled from "styled-components";

interface RowProps extends React.HTMLProps<HTMLDivElement> {
	setHeight?: string;
	minHeight?: string;
	maxHeight?: string;
}

export const Row = styled.div<RowProps>`
	display: flex;
	${({ setHeight }) => setHeight && `height: ${setHeight};`}
	${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
	${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
`;
