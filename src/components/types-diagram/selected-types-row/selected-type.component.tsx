import { FC } from "react";
import { Delete } from "../../../icons";
import { getIconAndColor } from "../type-diagram.utils";
import { IcoButtonWrapper } from "./ico-button-wrapper.styled";
import {
	SelectedTypeWrapper,
	SelectedTypeIcoWrapper,
} from "./selected-type-wrapper.styled";

interface SelectedTypeProps {
	name: string;
	onCancel: (name: string) => void;
}

export const SelectedType: FC<SelectedTypeProps> = ({ name, onCancel }) => {
	const { svg: Svg, color } = getIconAndColor(name);
	const onCancelHandler = () => onCancel?.(name);
	return (
		<SelectedTypeWrapper backgroundColor={color}>
			<SelectedTypeIcoWrapper>
				<Svg />
			</SelectedTypeIcoWrapper>
			{name}
			<IcoButtonWrapper onClick={onCancelHandler}>
				<Delete />
			</IcoButtonWrapper>
		</SelectedTypeWrapper>
	);
};
