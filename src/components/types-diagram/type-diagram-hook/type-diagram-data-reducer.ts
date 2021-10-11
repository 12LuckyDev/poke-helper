import { ReducerAction } from "./types/type-diagram-reducer-action";
import { ActionType } from "./types/type-diagram-reducer-action-type";
import { TypeDiagramStateType } from "./types/type-diagram-state-type";

export const typeDiagramDataReducer = (
	state: TypeDiagramStateType,
	{ type, payload }: ActionType
) => {
	switch (type) {
		case ReducerAction.GET_DATA_START:
			return {
				...state,
				loading: true,
				error: false,
			};
		case ReducerAction.SET_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				types: payload ?? [],
			};
		case ReducerAction.SET_DATA_ERROR:
			return {
				...state,
				loading: false,
				error: true,
				types: [],
			};
	}
};
