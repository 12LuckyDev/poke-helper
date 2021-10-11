import { PokeApiTypeFull } from "../../../../models";
import { ReducerAction } from "./type-diagram-reducer-action";

export type ActionType = {
	type: ReducerAction;
	payload?: PokeApiTypeFull[];
};
