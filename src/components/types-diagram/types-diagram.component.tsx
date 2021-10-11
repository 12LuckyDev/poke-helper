import { FC } from "react";
import { isArray } from "@12luckydev/utils";
import { CircleDiagram } from "../circle-diagram";
import { CircleDiagramIndicator } from "../circle-diagram/circle-diagram-indicator.styled";
import { DiagramSelectedTypes } from "./diagram-selected-types/diagram-selected-types.component";
import { SelectedTypesRow } from "./selected-types-row/selected-types-row.component";
import { TypeIcon } from "./types-diagram-icon/types-diagram-icon.component";
import { useSelectedType, useTypesData } from "./types-diagram.hooks";
import { DamageRelationsIndicator } from "./damage-relations-indicator/damage-relations-indicator.component";
import { calcDamageRelations } from "./type-diagram.utils";

export const TypesDiagram: FC = () => {
	const [types] = useTypesData();
	const [selected, isTypeSelected, handleTypeSelection] = useSelectedType();

	console.log(types, calcDamageRelations(types, selected));

	return (
		<main>
			<SelectedTypesRow selected={selected} onCancel={handleTypeSelection} />

			{isArray(types, false) && (
				<CircleDiagram
					data={types}
					keyExtractor={({ name }) => name}
					render={(el) => (
						<TypeIcon
							name={el.name}
							onClick={handleTypeSelection}
							isSelected={isTypeSelected}
						/>
					)}
				>
					<CircleDiagramIndicator step={20} index={0}>
						<DamageRelationsIndicator direction="left">
							aaa
						</DamageRelationsIndicator>
						<DamageRelationsIndicator direction="right">
							bbb
						</DamageRelationsIndicator>
					</CircleDiagramIndicator>
					<CircleDiagramIndicator step={20} index={1}>
						<DamageRelationsIndicator direction="left">
							aaa
						</DamageRelationsIndicator>
						<DamageRelationsIndicator direction="right">
							bbb
						</DamageRelationsIndicator>
					</CircleDiagramIndicator>
					<DiagramSelectedTypes selected={selected} />
				</CircleDiagram>
			)}
		</main>
	);
};
