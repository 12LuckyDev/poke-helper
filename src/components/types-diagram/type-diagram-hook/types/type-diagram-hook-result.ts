import { PokeApiTypeFull } from "../../../../models";

export type TypeDiagramHookResult = {
	types: PokeApiTypeFull[];
	loading: boolean;
	error: boolean;
};
