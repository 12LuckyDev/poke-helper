import { isArray, removeAt, add } from "@12luckydev/utils";
import { FC, useState } from "react";
import { CircleDiagram } from "../circle-diagram";
import { Row } from "../common-styled";
import { DiagramSelectedTypes } from "./diagram-selected-types/diagram-selected-types.component";
import { SelectedType } from "./selected-types-row/selected-type.component";
import { SelectedTypesRow } from "./selected-types-row/selected-types-row.component";
import { TypeIcon } from "./types-diagram-icon/types-diagram-icon.component";
import { useTypesData } from "./types-diagram.hook";

export const TypesDiagram: FC = () => {
	const [types] = useTypesData();
	const [selected, setSelected] = useState<string[]>([]);

	const isTypeSelected = (name: string) => selected.includes(name);

	const onTypeClick = (name: string) => {
		if (isTypeSelected(name)) {
			setSelected(removeAt(selected, selected.indexOf(name)));
		} else {
			if (selected.length > 1) {
				setSelected(add(removeAt(selected, 0), name));
			} else {
				setSelected(add(selected, name));
			}
		}
	};

	return (
		<main>
			<SelectedTypesRow selected={selected} onCancel={onTypeClick} />

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
				>
					<DiagramSelectedTypes selected={selected} />
				</CircleDiagram>
			)}
		</main>
	);
};
