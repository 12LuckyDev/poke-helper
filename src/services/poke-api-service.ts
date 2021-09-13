import { removeByProps } from "@12luckydev/utils";
import { ApiData, PokeApiTypeFull, PokeApiTypeList } from "../models";
import { get, getMany } from "./api-service";
import { getItem, setItem } from "./storage-service";

const API_URL = "https://pokeapi.co/api/v2/";
const TYPES_ENDPOINT = `${API_URL}type`;

const UNWANTED_TYPES = ["unknown", "shadow"];

const TYPES_STORAGE_KEY = "types";

const getAllTypesFromApi = async (): Promise<PokeApiTypeFull[] | null> => {
	const { ok, data: simplyData } = await get<ApiData<PokeApiTypeList>>(
		TYPES_ENDPOINT
	);
	if (ok) {
		const { results } = simplyData as PokeApiTypeList;
		const urls = removeByProps(results ?? [], "name", UNWANTED_TYPES).map(
			({ url }) => url
		);
		const { data } = await getMany<PokeApiTypeFull>(urls);
		setItem(TYPES_STORAGE_KEY, data);
		return data ?? null;
	}
	return null;
};

export const getAllTypes = async (): Promise<PokeApiTypeFull[] | null> => {
	const { ok, data } = await getItem<PokeApiTypeFull[]>(TYPES_STORAGE_KEY);
	if (ok) {
		return data ?? null;
	}

	return await getAllTypesFromApi();
};
