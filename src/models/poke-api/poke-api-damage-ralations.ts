import { PokeApiType } from "./poke-api-type";

export interface PokeApiDamageRelations {
	double_damage_from: PokeApiType[];
	double_damage_to: PokeApiType[];
	half_damage_from: PokeApiType[];
	half_damage_to: PokeApiType[];
	no_damage_from: PokeApiType[];
	no_damage_to: PokeApiType[];
}
