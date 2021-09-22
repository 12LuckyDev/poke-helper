import { isArray } from "@12luckydev/utils";
import { FC } from "react";
import { getIconAndColor } from "../type-diagram.utils";
import { DiagramSelectedTypeElement } from "./diagram-selected-type-element.styled";
import { DiagramSelectedTypeWrapper } from "./diagram-selected-type-wrapper.styled";

interface DiagramSelectedTypeProps {
	selected: string[];
}

export const DiagramSelectedTypes: FC<DiagramSelectedTypeProps> = ({
	selected,
}) => {
	return isArray(selected, false) ? (
		<DiagramSelectedTypeWrapper>
			{selected.map((type) => {
				const { color } = getIconAndColor(type);
				return (
					<DiagramSelectedTypeElement key={type} backgroundColor={color}>
						{type}
					</DiagramSelectedTypeElement>
				);
			})}
		</DiagramSelectedTypeWrapper>
	) : null;
};
