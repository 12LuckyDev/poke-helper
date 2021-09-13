import React from "react";
import { CircleDiagramElement } from "./circle-diagram-element.styled";
import { CircleDiagramWrapper } from "./circle-diagram-wrapper.styled";

interface CircleDiagramProps {
	data: any[]; // TODO CHANGE TO GENERIC
}

export const CircleDiagram: React.FC<CircleDiagramProps> = ({ data = [] }) => {
	const step = data.length > 0 ? 360 / data.length : 0;
	return (
		<CircleDiagramWrapper>
			{data.map((d, i) => (
				<CircleDiagramElement rotateDeg={step * i}>{i}</CircleDiagramElement>
			))}
		</CircleDiagramWrapper>
	);
};
