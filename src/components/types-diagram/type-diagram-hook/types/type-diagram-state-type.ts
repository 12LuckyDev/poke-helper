import { PokeApiTypeFull } from "../../../../models";

export type TypeDiagramStateType = {
	types: PokeApiTypeFull[];
	loading: boolean;
	error: boolean;
};
