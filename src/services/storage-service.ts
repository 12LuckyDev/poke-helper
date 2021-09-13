import localforage from "localforage";
import { StorageData } from "../models";

localforage.config({
	name: "LuckyPokeHelper",
	version: 1.0,
	description: "",
});

export const getItem = async <T>(name: string): Promise<StorageData<T>> => {
	const data = await localforage.getItem<T>(name);
	return data !== null ? { ok: true, data } : { ok: false };
};

export const setItem = async <T>(name: string, value: T) => {
	localforage.setItem<T>(name, value);
};
