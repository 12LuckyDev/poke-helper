import { isFunc } from "@12luckydev/utils";
import { PropsWithChildren } from "react";
import { CircleDiagramElement } from "./circle-diagram-element.styled";
import { CircleDiagramWrapper } from "./circle-diagram-wrapper.styled";

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
		</CircleDiagramWrapper>
	);
};

// calc position of center of circles and draw path
