export const calcRotateDeg = (step: number, index: number) => step * index;

export const calcRotateStep = <T>(collection: T[]) =>
	collection.length > 0 ? 360 / collection.length : 0;
