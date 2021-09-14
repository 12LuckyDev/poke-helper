import { isArray } from "@12luckydev/utils";
import { FC } from "react";
import { CircleDiagram } from "../circle-diagram";
import { useTypesData } from "./types-diagram.hook";

export const TypesDiagram: FC = () => {
	const [types] = useTypesData();
	console.log(types);
	return (
		<main>
			{isArray(types, false) && (
				<CircleDiagram
					data={types}
					keyExtractor={({ name }) => name}
					render={(el) => <p>{el.name}</p>}
				/>
			)}
		</main>
	);
};
