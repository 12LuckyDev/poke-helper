import styled, { css } from "styled-components";
import { PRIMARY, SECONDARY } from "../../styles/colors";

interface StyledButtonProps extends React.HTMLProps<HTMLButtonElement> {
	selected?: boolean;
	deselect?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
	box-sizing: border-box;
	background-color: transparent;
	color: ${SECONDARY};
	font-size: 1.6rem;
	padding: 1rem 1.6rem;
	width: 250px;
	max-width: calc(50% - 2rem);
	margin: 1rem;
	border: 3px solid ${SECONDARY};
	outline: none;

	&:hover {
		border: 5px solid ${SECONDARY};
		padding: calc(1rem - 4px) calc(1.6rem - 4px);
		font-weight: bold;
	}

	${({ selected, deselect }) =>
		selected &&
		css`
			font-weight: bold;
			background-color: ${SECONDARY};
			color: ${PRIMARY};
			${deselect &&
			css`
				&:hover {
					border: double 5px ${PRIMARY};
					padding: calc(1rem - 4px) calc(1.6rem - 4px);
				}
			`}
		`}
`;
