import { FC, SVGProps } from "react";
import * as TYPE_ICONS from "../../icons/types";
import { IconWrapper } from "./types-diagram-icon-wraper.styled";

type SvgIco = FC<
	SVGProps<SVGSVGElement> & {
		title?: string | undefined;
	}
>;

const getIconAndColor = (name: string): { svg: SvgIco; color: string } => {
	switch (name) {
		case "bug":
			return { svg: TYPE_ICONS.Bug, color: "#93bb3a" };
		case "dark":
			return { svg: TYPE_ICONS.Dark, color: "#595761" };
		case "dragon":
			return { svg: TYPE_ICONS.Dragon, color: "#176bc5" };
		case "electric":
			return { svg: TYPE_ICONS.Electric, color: "#f1d85a" };
		case "fairy":
			return { svg: TYPE_ICONS.Fairy, color: "#ed93e4" };
		case "fighting":
			return { svg: TYPE_ICONS.Fighting, color: "#d14460" };
		case "fire":
			return { svg: TYPE_ICONS.Fire, color: "#f9a555" };
		case "flying":
			return { svg: TYPE_ICONS.Flying, color: "#a2bcea" };
		case "ghost":
			return { svg: TYPE_ICONS.Ghost, color: "#606fba" };
		case "grass":
			return { svg: TYPE_ICONS.Grass, color: "#63bc5d" };
		case "ground":
			return { svg: TYPE_ICONS.Ground, color: "#d87c52" };
		case "ice":
			return { svg: TYPE_ICONS.Ice, color: "#79d0c2" };
		case "normal":
			return { svg: TYPE_ICONS.Normal, color: "#a0a29f" };
		case "poison":
			return { svg: TYPE_ICONS.Poison, color: "#b567cd" };
		case "psychic":
			return { svg: TYPE_ICONS.Psychic, color: "#f88684" };
		case "rock":
			return { svg: TYPE_ICONS.Rock, color: "#c9bb8d" };
		case "steel":
			return { svg: TYPE_ICONS.Steel, color: "#5995a2" };
		case "water":
			return { svg: TYPE_ICONS.Water, color: "#579edd" };
		default:
			return { svg: TYPE_ICONS.Unknown, color: "#ffffff" };
	}
};

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
