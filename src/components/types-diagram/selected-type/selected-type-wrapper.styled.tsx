import styled from "styled-components";

interface SelectedTypeWrapperProps extends React.HTMLProps<HTMLDivElement> {
	backgroundColor: string;
}

export const SelectedTypeWrapper = styled.div<SelectedTypeWrapperProps>`
	height: 50px;
	width: 50%;
	display: flex;
	align-items: center;
	background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const SelectedTypeIcoWrapper = styled.div`
	height: 50px;
	width: 50px;

	svg {
		height: 90%;
		width: 90%;
		margin: 5%;
	}
`;
