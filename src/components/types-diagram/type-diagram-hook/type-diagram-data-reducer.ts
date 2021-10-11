import { ReducerAction } from "./types/type-diagram-reducer-action";
import { ActionType } from "./types/type-diagram-reducer-action-type";
import { TypeDiagramStateType } from "./types/type-diagram-state-type";
import { changeTypeSelection } from "./utils/change-type-selection";

export const typeDiagramDataReducer = (
	state: TypeDiagramStateType,
	action: ActionType
) => {
	switch (action.type) {
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
				types: action.payload,
			};
		case ReducerAction.SET_DATA_ERROR:
			return {
				...state,
				loading: false,
				error: true,
				types: [],
			};
		case ReducerAction.CHANGE_SELECTED:
			return {
				...state,
				selected: changeTypeSelection(state.selected, action.payload),
			};
	}
};
