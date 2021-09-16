import { isFunc } from "@12luckydev/utils";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { CircleDiagramElement } from "./circle-diagram-element.styled";
import { CircleDiagramWrapper } from "./circle-diagram-wrapper.styled";

const ArrowContainer = styled.svg`
	width: 100%;
	height: 100%;
`;

interface CircleDiagramProps<T> {
	data: T[];
	keyExtractor: (el: T) => string;
	render?: (el: T) => JSX.Element;
}

export const CircleDiagram = <T,>({
	data,
	keyExtractor,
	render,
}: PropsWithChildren<CircleDiagramProps<T>>) => {
	const step = data.length > 0 ? 360 / data.length : 0;
	return (
		<CircleDiagramWrapper>
			{data.map((el, i) => (
				<CircleDiagramElement key={keyExtractor(el)} rotateDeg={step * i}>
					{isFunc(render) && render?.(el)}
				</CircleDiagramElement>
			))}
			<ArrowContainer viewBox="0 0 100 100">
				<path
					d="M0,50 100,50"
					style={{ stroke: "red", strokeWidth: "1.25px", fill: "none" }}
				/>
			</ArrowContainer>
		</CircleDiagramWrapper>
	);
};

// calc position of center of circles and draw path
