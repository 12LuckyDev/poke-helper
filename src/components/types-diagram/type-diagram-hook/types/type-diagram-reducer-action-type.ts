import { PokeApiTypeFull } from "../../../../models";
import { ReducerAction } from "./type-diagram-reducer-action";

export type ActionType =
	| { type: ReducerAction.GET_DATA_START }
	| { type: ReducerAction.SET_DATA_ERROR }
	| {
			type: ReducerAction.SET_DATA_SUCCESS;
			payload: PokeApiTypeFull[];
	  }
	| { type: ReducerAction.CHANGE_SELECTED; payload: string }
	| { type: ReducerAction.CHANGE_MODE; payload: string[] };
