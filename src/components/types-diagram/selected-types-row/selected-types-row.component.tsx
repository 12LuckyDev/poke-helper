import { FC } from "react";
import { Row } from "../../common-styled";
import { SelectedType } from "./selected-type.component";

interface SelectedTypesRowProps {
	selected: string[];
	onCancel: (name: string) => void;
}

export const SelectedTypesRow: FC<SelectedTypesRowProps> = ({
	selected,
	onCancel,
}) => {
	return (
		<Row setHeight="50px">
			{selected.map((s) => (
				<SelectedType name={s} key={s} onCancel={onCancel} />
			))}
		</Row>
	);
};
