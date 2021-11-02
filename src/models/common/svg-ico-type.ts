import { FC, SVGProps } from "react";

export type SvgIco = FC<
	SVGProps<SVGSVGElement> & {
		title?: string | undefined;
	}
>;
