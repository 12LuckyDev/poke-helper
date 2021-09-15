import { FC } from "react";
import { getIconAndColor } from "../type-diagram.utils";
import { IconWrapper } from "./types-diagram-icon-wraper.styled";

interface TypeIconProps {
	name: string;
	onClick?: (name: string) => void;
	isSelected?: (name: string) => boolean;
}

export const TypeIcon: FC<TypeIconProps> = ({ name, onClick, isSelected }) => {
	const { svg: Svg, color } = getIconAndColor(name);

	const onClickHandler = () => onClick?.(name);

	return (
		<IconWrapper
			backgroundColor={color}
			onClick={onClickHandler}
			selected={isSelected?.(name)}
		>
			<Svg />
		</IconWrapper>
	);
};
