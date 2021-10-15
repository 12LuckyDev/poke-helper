import styled from "styled-components";
import { TypeColorProps } from "../../../common/type-color.props";

interface ArrowSvgPolygonProps
	extends React.HTMLProps<SVGPolygonElement>,
		TypeColorProps {}

export const ArrowSvgPolygon = styled.polygon<ArrowSvgPolygonProps>`
	fill: ${({ backgroundColor }) => backgroundColor};
`;
