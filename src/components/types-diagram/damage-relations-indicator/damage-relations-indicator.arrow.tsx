import { FC } from "react";
import styled from "styled-components";

const ArrowWrapper = styled.svg`
	width: var(--arrow-size);
	height: var(--arrow-size);
	margin: var(--arrow-margin) 0;
`;

const viewBox = "0 0 100 100";

export const DamageRelationsIndicatorArrowLeft: FC = () => {
	return (
		<ArrowWrapper viewBox={viewBox}>
			<polygon points="0,50 100,0 100,100" style={{ fill: "green" }} />
		</ArrowWrapper>
	);
};

export const DamageRelationsIndicatorArrowRight: FC = () => {
	return (
		<ArrowWrapper viewBox={viewBox}>
			<polygon points="0,100 0,0 100,50" style={{ fill: "green" }} />
		</ArrowWrapper>
	);
};
