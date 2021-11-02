import { FC } from "react";
import { StyledButton } from "../common-styled/button.styled";

interface ButtonProps {
	name?: string;
	text?: string;
	onClick?: (name?: string) => void;
	selected?: boolean;
	deselect?: boolean;
}

export const Button: FC<ButtonProps> = ({
	name,
	children,
	onClick,
	selected,
	deselect,
}) => {
	const onClickHandler = () => onClick?.(name);
	return (
		<StyledButton
			selected={selected}
			deselect={deselect}
			onClick={onClickHandler}
		>
			{children}
		</StyledButton>
	);
};
