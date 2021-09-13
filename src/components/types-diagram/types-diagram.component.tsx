import { isArray } from "@12luckydev/utils";
import { FC } from "react";
import { CircleDiagram } from "../circle-diagram";
import { useTypesData } from "./types-diagram.hook";

export const TypesDiagram: FC = () => {
	const [types] = useTypesData();

	return <main>{isArray(types, false) && <CircleDiagram data={types} />}</main>;
};
