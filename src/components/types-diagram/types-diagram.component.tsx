import { isArray, removeAt } from "@12luckydev/utils";
import { FC, useState } from "react";
import { CircleDiagram } from "../circle-diagram";
import { TypeIcon } from "./types-diagram-icon.component";
import { useTypesData } from "./types-diagram.hook";

export const TypesDiagram: FC = () => {
	const [types] = useTypesData();
	const [selected, setSelected] = useState<string[]>([]);

	const isTypeSelected = (name: string) => selected.includes(name);

	const onTypeClick = (name: string) => {
		if (isTypeSelected(name)) {
			setSelected(removeAt(selected, selected.indexOf(name)));
		} else {
			setSelected([...selected, name]);
		}
	};

	return (
		<main>
			{isArray(types, false) && (
				<CircleDiagram
					data={types}
					keyExtractor={({ name }) => name}
					render={(el) => (
						<TypeIcon
							name={el.name}
							onClick={onTypeClick}
							isSelected={isTypeSelected}
						/>
					)}
				/>
			)}
		</main>
	);
};
