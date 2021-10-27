import styled from "styled-components";
import { TypeColorProps } from "../../common/type-color.props";

interface DamageRelationsIndicatorBodyProps
	extends React.HTMLProps<HTMLDivElement>,
		TypeColorProps {}

export const DamageRelationsIndicatorBody = styled.div<DamageRelationsIndicatorBodyProps>`
	flex: 1;
	background-color: ${({ backgroundColor }) => backgroundColor};
	height: var(--arrow-size);
	margin: var(--arrow-margin) 0;
	max-width: 85%;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		filter: invert(100%);
	}
`;
