import { FC } from "react";
import { TypeColorProps } from "../../../common/type-color.props";
import { ArrowSvgPolygon } from "./arrow-svg-polygon.styled";
import { ArrowSvgWrapper, arrorSvgViewBox } from "./arrow-svg-wrapper.styled";

export const IndicatorArrowLeft: FC<TypeColorProps> = ({ backgroundColor }) => {
	return (
		<ArrowSvgWrapper viewBox={arrorSvgViewBox}>
			<ArrowSvgPolygon
				points="0,50 100,0 100,100"
				backgroundColor={backgroundColor}
			/>
		</ArrowSvgWrapper>
	);
};

export const IndicatorArrowRight: FC<TypeColorProps> = ({
	backgroundColor,
}) => {
	return (
		<ArrowSvgWrapper viewBox={arrorSvgViewBox}>
			<ArrowSvgPolygon
				points="0,100 0,0 100,50"
				backgroundColor={backgroundColor}
			/>
		</ArrowSvgWrapper>
	);
};
