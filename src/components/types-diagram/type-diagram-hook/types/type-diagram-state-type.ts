import { DamageRelation, PokeApiTypeFull } from "../../../../models";

export type TypeDiagramStateType = {
	types: PokeApiTypeFull[];
	loading: boolean;
	error: boolean;
	selected: string[];
	damageRelations: DamageRelation[];
	mode: string[];
};

export const initialState: TypeDiagramStateType = {
	types: [],
	loading: false,
	error: false,
	selected: [],
	damageRelations: [],
	mode: [],
};
