import { ApiData } from "../models";

const returnApiData = async <T>(response: Response): Promise<ApiData<T>> => {
	if (response.ok) {
		const json = await response.json();
		return {
			ok: true,
			status: response.status,
			data: json,
		};
	}

	return {
		ok: true,
		status: response.status,
	};
};

const simpleGet = async (url: string) => {
	const response = await fetch(url);
	return response;
};

export const get = async <T>(url: string): Promise<ApiData<T>> => {
	const response = await simpleGet(url);
	const apiData = await returnApiData<T>(response);
	return apiData;
};

export const getMany = async <T>(urls: string[]): Promise<ApiData<T[]>> => {
	try {
		const promises = urls.map((url) => simpleGet(url));
		const datas = await Promise.all(promises);
		const jsons = await Promise.all(datas.map((response) => response.json()));
		return { ok: true, data: jsons };
	} catch (ex) {
		return { ok: false };
	}
};
