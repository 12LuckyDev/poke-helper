import { add, removeAt } from "@12luckydev/utils";

export const changeTypeSelection = (selected: string[], newType: string) => {
	if (selected.includes(newType)) {
		return removeAt(selected, selected.indexOf(newType));
	} else {
		if (selected.length > 1) {
			return add(removeAt(selected, 0), newType);
		} else {
			return add(selected, newType);
		}
	}
};
