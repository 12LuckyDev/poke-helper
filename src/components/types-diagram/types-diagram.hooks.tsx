import { removeAt, add } from "@12luckydev/utils";
import { useEffect, useReducer, useState } from "react";
import { PokeApiTypeFull } from "../../models";
import { getAllTypes } from "../../services";

enum ReducerActions {
	GET_DATA_START,
	SET_DATA_SUCCESS,
	SET_DATA_ERROR,
}

type StateType = {
	types: PokeApiTypeFull[];
	loading: boolean;
	error: boolean;
};

type ActionType = {
	type: ReducerActions;
	payload?: PokeApiTypeFull[];
};

const initialState: StateType = {
	types: [],
	loading: false,
	error: false,
};

const reducer = (state: StateType, { type, payload }: ActionType) => {
	switch (type) {
		case ReducerActions.GET_DATA_START:
			return {
				...state,
				loading: true,
				error: false,
			};
		case ReducerActions.SET_DATA_SUCCESS:
			return {
				loading: false,
				error: false,
				types: payload ?? [],
			};
		case ReducerActions.SET_DATA_ERROR:
			return {
				loading: false,
				error: true,
				types: [],
			};
	}
};

export const useTypesData = (): [PokeApiTypeFull[], boolean, boolean] => {
	const [{ types, loading, error }, dispatch] = useReducer(
		reducer,
		initialState
	);

	useEffect(() => {
		const getTypes = async () => {
			dispatch({ type: ReducerActions.GET_DATA_START });
			const apiTypes = await getAllTypes();

			if (apiTypes !== null) {
				dispatch({ type: ReducerActions.SET_DATA_SUCCESS, payload: apiTypes });
			} else {
				dispatch({ type: ReducerActions.SET_DATA_ERROR });
			}
		};
		getTypes();
	}, []);

	return [types, loading, error];
};

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