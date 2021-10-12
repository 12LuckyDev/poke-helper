import { PokeApiTypeFull } from "../../../../models";
import { TypeDiagramStateType } from "./type-diagram-state-type";

export type TypeDiagramHookResult = {
	// types: PokeApiTypeFull[];
	// loading: boolean;
	// error: boolean;
	// selected: string[];
	state: TypeDiagramStateType;
	isTypeSelected: (name: string) => boolean;
	handleTypeSelection: (name: string) => void;
};
