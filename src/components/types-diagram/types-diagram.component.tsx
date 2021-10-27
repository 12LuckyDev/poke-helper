import { FC } from "react";
import { CircleDiagram } from "../circle-diagram";
import { DiagramSelectedTypes } from "./diagram-selected-types/diagram-selected-types.component";
import { SelectedTypesRow } from "./selected-types-row/selected-types-row.component";
import { TypeIcon } from "./types-diagram-icon/types-diagram-icon.component";
import { useTypeDiagramData } from "./type-diagram-hook/use-type-diagram-data.";
import { DamageRelationsIndicators } from "./damage-relations-indicators/damage-relations-indicators.component";

// TODO
// - Make selectable options with:
// - attact - only one type selectable - shows attack bonusses
// - defense - 2 types selectable - show combinantion weakness
//
// - fix center indicator font sizes on phones

export const TypesDiagram: FC = () => {
	const { state, isTypeSelected, handleTypeSelection } = useTypeDiagramData();
	const { types, selected, damageRelations } = state;
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
					handsData={damageRelations}
					handsIndexKey="typeIndex"
					handsKeyExtractor={({ toType }) => toType}
					renderHands={(el) => <DamageRelationsIndicators relation={el} />}
				>
					<DiagramSelectedTypes selected={selected} />
				</CircleDiagram>
			}
		</main>
	);
};
