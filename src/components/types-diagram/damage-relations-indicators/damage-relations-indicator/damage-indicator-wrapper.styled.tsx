import styled from "styled-components";

interface DamageIndicatorWrapperProps extends React.HTMLProps<HTMLDivElement> {
	pushToEnd?: boolean;
}

export const DamageIndicatorWrapper = styled.div<DamageIndicatorWrapperProps>`
	--arrow-margin: 2px;
	--arrow-size: calc(var(--wrapper-height) / 2 - var(--arrow-margin) * 2);

	display: flex;
	${({ pushToEnd }) => pushToEnd && "justify-content: end;"}
	font-size: 1.4rem;
	font-weight: bold;
`;
