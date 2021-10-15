import styled from "styled-components";
import { TypeColorProps } from "../../common/type-color.props";

interface DamageRelationsIndicatorBodyProps
	extends React.HTMLProps<HTMLDivElement>,
		TypeColorProps {}

export const DamageRelationsIndicatorBody = styled.div<DamageRelationsIndicatorBodyProps>`
	flex: 1;
	background-color: ${({ backgroundColor }) => backgroundColor};
	display: flex;
	justify-content: end;
	height: var(--arrow-size);
	margin: var(--arrow-margin) 0;

	svg {
		filter: invert(100%);
	}
`;
