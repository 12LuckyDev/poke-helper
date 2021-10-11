import { useEffect, useReducer } from "react";
import { getAllTypes } from "../../../services";
import { typeDiagramDataReducer } from "./type-diagram-data-reducer";
import { TypeDiagramHookResult } from "./types/type-diagram-hook-result";
import { ReducerAction } from "./types/type-diagram-reducer-action";
import { TypeDiagramStateType } from "./types/type-diagram-state-type";

const initialState: TypeDiagramStateType = {
	types: [],
	loading: false,
	error: false,
	selected: [],
};

export const useTypeDiagramData = (): TypeDiagramHookResult => {
	const [{ types, loading, error, selected }, dispatch] = useReducer(
		typeDiagramDataReducer,
		initialState
	);

	useEffect(() => {
		const getTypes = async () => {
			dispatch({ type: ReducerAction.GET_DATA_START });
			const apiTypes = await getAllTypes();

			if (apiTypes !== null) {
				dispatch({ type: ReducerAction.SET_DATA_SUCCESS, payload: apiTypes });
			} else {
				dispatch({ type: ReducerAction.SET_DATA_ERROR });
			}
		};
		getTypes();
	}, []);

	const isTypeSelected = (name: string) => selected.includes(name);

	const handleTypeSelection = (name: string) =>
		dispatch({ type: ReducerAction.CHANGE_SELECTED, payload: name });

	return {
		types,
		loading,
		error,
		selected,
		isTypeSelected,
		handleTypeSelection,
	};
};
