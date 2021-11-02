import { TypeDiagramStateType } from "./type-diagram-state-type";

export type TypeDiagramHookResult = {
	state: TypeDiagramStateType;
	isTypeSelected: (name: string) => boolean;
	handleTypeSelection: (name: string) => void;
	changeMode: (mode: string[]) => void;
};
