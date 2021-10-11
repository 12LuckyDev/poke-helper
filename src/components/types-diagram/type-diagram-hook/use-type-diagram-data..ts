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
};

export const useTypeDiagramData = (): TypeDiagramHookResult => {
	const [{ types, loading, error }, dispatch] = useReducer(
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

	return { types, loading, error };
};
