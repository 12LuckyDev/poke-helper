import { FC } from "react";
import { CircleDiagram } from "../circle-diagram";
import { CircleDiagramIndicator } from "../circle-diagram/circle-diagram-indicator.styled";
import { DiagramSelectedTypes } from "./diagram-selected-types/diagram-selected-types.component";
import { SelectedTypesRow } from "./selected-types-row/selected-types-row.component";
import { TypeIcon } from "./types-diagram-icon/types-diagram-icon.component";
import { DamageRelationsIndicator } from "./damage-relations-indicator/damage-relations-indicator.component";
import { useTypeDiagramData } from "./type-diagram-hook/use-type-diagram-data.";

export const TypesDiagram: FC = () => {
	const { state, isTypeSelected, handleTypeSelection } = useTypeDiagramData();
	const { types, selected } = state;
	return (
		<main>
			<SelectedTypesRow selected={selected} onCancel={handleTypeSelection} />

			{
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
			}
		</main>
	);
};
