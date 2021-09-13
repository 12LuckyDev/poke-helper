import { PokeApiType } from "./poke-api-type";

export interface PokeApiTypeList {
	count?: number;
	next?: boolean;
	previous?: boolean;
	results?: PokeApiType[];
}
