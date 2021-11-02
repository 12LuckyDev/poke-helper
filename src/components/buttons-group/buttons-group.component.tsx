import { add, removeAt } from "@12luckydev/utils";
import { PropsWithChildren } from "react";
import { Button } from "../button/button.component";
import { Row } from "../common-styled/row";

interface ButtonsGroupProps<T> {
	data: T[];
	idField: keyof T;
	textField: keyof T;
	value: string[];
	onChange: (value: string[]) => void;
	multiselect?: boolean;
	deselect?: boolean;
}

export const ButtonsGroup = <T,>({
	data,
	idField,
	textField,
	value,
	onChange,
	multiselect = false,
	deselect = false,
}: PropsWithChildren<ButtonsGroupProps<T>>) => {
	const onClickHandler = (name?: string) => {
		if (name) {
			const selected = value.includes(name);
			if (multiselect) {
				if (!selected) {
					onChange(add(value, name));
				} else {
					onChange(removeAt(value, value.indexOf(name)));
				}
			} else {
				if (deselect && selected) {
					onChange([]);
				} else if (!selected) {
					onChange([name]);
				}
			}
		}
	};

	return (
		<Row center>
			{data.map((el) => {
				const stringId = `${el[idField]}`;
				const selected = value.includes(stringId);
				return (
					<Button
						key={stringId}
						name={stringId}
						onClick={onClickHandler}
						selected={selected}
						deselect={deselect}
					>
						{el[textField]}
					</Button>
				);
			})}
		</Row>
	);
};
