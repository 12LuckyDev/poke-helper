import styled from "styled-components";

interface RowProps extends React.HTMLProps<HTMLDivElement> {
	setHeight?: string;
}

export const Row = styled.div<RowProps>`
	display: flex;
	${({ setHeight }) => setHeight && `height: ${setHeight};`}
`;
