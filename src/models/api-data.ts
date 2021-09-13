export interface ApiData<T> {
	ok: boolean;
	data?: T;
	status?: number;
}
