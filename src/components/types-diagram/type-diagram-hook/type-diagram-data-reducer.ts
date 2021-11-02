import { ReducerAction } from "./types/type-diagram-reducer-action";
import { ActionType } from "./types/type-diagram-reducer-action-type";
import { TypeDiagramStateType } from "./types/type-diagram-state-type";
import { calcDamageRelations } from "./utils/calc-damage-relations";
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
			const selected = changeTypeSelection(state.selected, action.payload);
			const damageRelations = calcDamageRelations(state.types, selected);
			return {
				...state,
				selected,
				damageRelations,
			};
		case ReducerAction.CHANGE_MODE:
			return {
				...state,
				mode: action.payload,
			};
	}
};
