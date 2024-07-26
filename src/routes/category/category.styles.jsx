import styled from "styled-components";

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	@media (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 15px;
	}
	column-gap: 20px;
	row-gap: 50px;
`;

export const Title = styled.h2`
	font-size: 38px;
	margin-bottom: 25px;
	text-align: center;
`;
