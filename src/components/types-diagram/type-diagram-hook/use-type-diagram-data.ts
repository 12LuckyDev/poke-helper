import { useEffect, useReducer } from "react";
import { getAllTypes } from "../../../services";
import { typeDiagramDataReducer } from "./type-diagram-data-reducer";
import { TypeDiagramHookResult } from "./types/type-diagram-hook-result";
import { ReducerAction } from "./types/type-diagram-reducer-action";
import { initialState } from "./types/type-diagram-state-type";

export const useTypeDiagramData = (): TypeDiagramHookResult => {
	const [state, dispatch] = useReducer(typeDiagramDataReducer, initialState);

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

	const isTypeSelected = (name: string) => state.selected.includes(name);

	const handleTypeSelection = (name: string) =>
		dispatch({ type: ReducerAction.CHANGE_SELECTED, payload: name });

	const changeMode = (modeArray: string[]) => {
		const [mode] = modeArray;
		if (mode) {
			dispatch({ type: ReducerAction.CHANGE_MODE, payload: mode });
		}
	};

	return {
		state,
		isTypeSelected,
		handleTypeSelection,
		changeMode,
	};
};
