import styled from "styled-components";

export const CircleDiagramWrapper = styled.div`
	--size: calc(100vh - 150px);

	@media (orientation: portrait) {
		--size: calc(100vw - 50px);
		margin: 25px;
	}

	position: relative;
	border-radius: 50%;
	width: var(--size);
	height: var(--size);
	margin: 50px auto;
	max-width: 100%;
`;
