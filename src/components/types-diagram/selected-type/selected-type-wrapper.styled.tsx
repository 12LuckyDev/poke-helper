import styled from "styled-components";

interface SelectedTypeWrapperProps extends React.HTMLProps<HTMLDivElement> {
	backgroundColor: string;
}

export const SelectedTypeWrapper = styled.div<SelectedTypeWrapperProps>`
	height: 50px;
	width: 50%;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ backgroundColor }) => backgroundColor};
	font-size: 2.5rem;
	text-transform: capitalize;
	font-weight: bold;
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
