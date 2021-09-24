import { isFunc } from "@12luckydev/utils";
import { PropsWithChildren } from "react";
import { CircleDiagramElement } from "./circle-diagram-element.styled";
import { CircleDiagramWrapper } from "./circle-diagram-wrapper.styled";
import { calcRotateStep } from "./common/circle-diagram-rotable.utils";

interface CircleDiagramProps<T> {
	data: T[];
	keyExtractor: (el: T) => string;
	render?: (el: T) => JSX.Element;
}

export const CircleDiagram = <T,>({
	data,
	keyExtractor,
	render,
	children,
}: PropsWithChildren<CircleDiagramProps<T>>) => {
	const step = calcRotateStep(data);
	return (
		<CircleDiagramWrapper>
			{children}
			{data.map((el, i) => (
				<CircleDiagramElement key={keyExtractor(el)} step={step} index={i}>
					{isFunc(render) && render?.(el)}
				</CircleDiagramElement>
			))}
		</CircleDiagramWrapper>
	);
};

// calc position of center of circles and draw path
