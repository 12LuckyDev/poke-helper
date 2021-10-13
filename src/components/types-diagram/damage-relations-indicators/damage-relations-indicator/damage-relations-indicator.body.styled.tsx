import styled from "styled-components";

interface DamageRelationsIndicatorBodyProps
	extends React.HTMLProps<HTMLDivElement> {}

export const DamageRelationsIndicatorBody = styled.div<DamageRelationsIndicatorBodyProps>`
	flex: 1;
	background-color: red;
	display: flex;
	justify-content: end;
	height: var(--arrow-size);
	margin: var(--arrow-margin) 0;
`;
