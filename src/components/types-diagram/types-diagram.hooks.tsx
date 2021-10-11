import { removeAt, add } from "@12luckydev/utils";
import { useState } from "react";

export const useSelectedType = (): [
	string[],
	(name: string) => boolean,
	(name: string) => void
] => {
	const [selected, setSelected] = useState<string[]>([]);

	const isTypeSelected = (name: string) => selected.includes(name);

	const handleTypeSelection = (name: string) => {
		if (isTypeSelected(name)) {
			setSelected(removeAt(selected, selected.indexOf(name)));
		} else {
			if (selected.length > 1) {
				setSelected(add(removeAt(selected, 0), name));
			} else {
				setSelected(add(selected, name));
			}
		}
	};

	return [selected, isTypeSelected, handleTypeSelection];
};
