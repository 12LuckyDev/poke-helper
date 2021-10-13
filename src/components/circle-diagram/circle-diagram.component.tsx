import { isArray, isFunc } from "@12luckydev/utils";
import { PropsWithChildren } from "react";
import { CircleDiagramElement } from "./circle-diagram-element.styled";
import { CircleDiagramWrapper } from "./circle-diagram-wrapper.styled";
import { CircleDiagramHand } from "./circle-diagram-hand.styled";
import { calcRotateStep } from "./common/circle-diagram-rotable.utils";

interface CircleDiagramProps<T, S> {
	data: T[];
	keyExtractor: (el: T) => string;
	render?: (el: T) => JSX.Element;
	handsData?: S[];
	handsIndexKey?: keyof S;
	renderHands?: (el: S) => JSX.Element;
	handsKeyExtractor?: (el: S) => string;
}

export const CircleDiagram = <T, S>({
	data,
	keyExtractor,
	render,
	children,
	handsData,
	handsIndexKey,
	renderHands,
	handsKeyExtractor,
}: PropsWithChildren<CircleDiagramProps<T, S>>) => {
	const step = calcRotateStep(data);
	return (
		<CircleDiagramWrapper>
			{isFunc(renderHands) &&
				isFunc(handsKeyExtractor) &&
				isArray(handsData, false) &&
				!!handsIndexKey &&
				handsData?.map((el) => (
					<CircleDiagramHand
						key={handsKeyExtractor?.(el)}
						step={step}
						index={Number(el[handsIndexKey])}
					>
						{renderHands?.(el)}
					</CircleDiagramHand>
				))}

			{children}

			{isFunc(render) &&
				data.map((el, i) => (
					<CircleDiagramElement key={keyExtractor(el)} step={step} index={i}>
						{render?.(el)}
					</CircleDiagramElement>
				))}
		</CircleDiagramWrapper>
	);
};
