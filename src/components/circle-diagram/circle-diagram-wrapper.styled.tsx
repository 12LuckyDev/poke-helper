import styled from "styled-components";

export const CircleDiagramWrapper = styled.div`
	--size: calc(100vw - 50px);
	--element-size: 50px;

	margin: 25px;

	@media (orientation: landscape) {
		--size: calc(100vh - 70px);
		margin: 10px auto;
	}

	@media only screen and (min-width: 768px) {
		--size: calc(100vh - 150px);
		margin: 50px auto;
	}

	position: relative;
	border-radius: 50%;
	width: var(--size);
	height: var(--size);
	max-width: 100%;
`;
