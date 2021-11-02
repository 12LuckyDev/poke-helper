import styled, { css } from "styled-components";
import { SECONDARY } from "../../../styles/colors";
import { TypeColorProps } from "../common/type-color.props";

interface IconWrapperProps
	extends React.HTMLProps<HTMLDivElement>,
		TypeColorProps {
	selected?: boolean;
}

export const IconWrapper = styled.div<IconWrapperProps>`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: ${({ backgroundColor }) => backgroundColor};

	svg {
		height: 70%;
		width: 70%;
		margin: 15%;
	}

	&:hover {
		border: solid 3px ${SECONDARY};
	}

	${({ selected }) =>
		selected &&
		css`
			border: solid 5px ${SECONDARY};
			&:hover {
				border: double 5px ${SECONDARY};
			}
		`}
`;
