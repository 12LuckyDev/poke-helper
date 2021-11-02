import { FC } from "react";
import { CircleDiagram } from "../circle-diagram";
import { DiagramSelectedTypes } from "./diagram-selected-types/diagram-selected-types.component";
import { SelectedTypesRow } from "./selected-types-row/selected-types-row.component";
import { TypeIcon } from "./types-diagram-icon/types-diagram-icon.component";
import { useTypeDiagramData } from "./type-diagram-hook/use-type-diagram-data";
import { DamageRelationsIndicators } from "./damage-relations-indicators/damage-relations-indicators.component";
import { ButtonsGroup } from "../buttons-group/buttons-group.component";
import { MODES } from "./type-diagram-hook/consts/modes";
import { TypesDiagramWrapper } from "./types-diagram-wrapper.styled";
import { TypesDiagramSettingSection } from "./types-diagram-setting-section.styled";
import { TypesDiagrmCircleWrapper } from "./types-diagram-circle-wrapper";

export const TypesDiagram: FC = () => {
	const { state, isTypeSelected, handleTypeSelection, changeMode } =
		useTypeDiagramData();
	const { types, selected, damageRelations, mode } = state;
	return (
		<TypesDiagramWrapper>
			<TypesDiagramSettingSection>
				<SelectedTypesRow selected={selected} onCancel={handleTypeSelection} />
				<ButtonsGroup
					data={MODES}
					idField="id"
					textField="text"
					value={[mode]}
					onChange={changeMode}
				/>
			</TypesDiagramSettingSection>

			<TypesDiagrmCircleWrapper>
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
			</TypesDiagrmCircleWrapper>
		</TypesDiagramWrapper>
	);
};
