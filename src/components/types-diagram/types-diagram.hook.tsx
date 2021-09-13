import { useEffect, useState } from "react";
import { PokeApiTypeFull } from "../../models";
import { getAllTypes } from "../../services";

export const useTypesData = (): [PokeApiTypeFull[], boolean, boolean] => {
	const [types, setTypes] = useState<PokeApiTypeFull[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getTypes = async () => {
			setLoading(true);
			setError(false);
			const apiTypes = await getAllTypes();

			if (apiTypes !== null) {
				setTypes(apiTypes as PokeApiTypeFull[]);
			} else {
				setError(true);
			}
			setLoading(false);
		};
		getTypes();
	}, []);

	return [types, loading, error];
};
