import { PokeApiTypeFull } from "../../../../models";

export type TypeDiagramHookResult = {
	types: PokeApiTypeFull[];
	loading: boolean;
	error: boolean;
	selected: string[];
	isTypeSelected: (name: string) => boolean;
	handleTypeSelection: (name: string) => void;
};
