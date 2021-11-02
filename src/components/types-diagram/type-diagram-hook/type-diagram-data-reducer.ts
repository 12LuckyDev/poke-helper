import { ModeType } from "./consts/modes";
import { ReducerAction } from "./types/type-diagram-reducer-action";
import { ActionType } from "./types/type-diagram-reducer-action-type";
import { TypeDiagramStateType } from "./types/type-diagram-state-type";
import { calcDamageRelations } from "./utils/calc-damage-relations";
import { changeTypeSelection } from "./utils/change-type-selection";

export const typeDiagramDataReducer = (
	state: TypeDiagramStateType,
	action: ActionType
) => {
	const { selected, types, mode } = state;
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
		case ReducerAction.CHANGE_SELECTED: {
			const newSelected = changeTypeSelection(selected, action.payload, mode);
			const damageRelations = calcDamageRelations(types, newSelected, mode);
			return {
				...state,
				selected: newSelected,
				damageRelations,
			};
		}
		case ReducerAction.CHANGE_MODE: {
			const newSelected =
				action.payload === ModeType.ATTACT
					? selected.length > 0
						? [selected[0]]
						: []
					: selected;
			const damageRelations = calcDamageRelations(
				types,
				newSelected,
				action.payload
			);
			return {
				...state,
				selected: newSelected,
				mode: action.payload,
				damageRelations,
			};
		}
	}
};
