import styled from "styled-components";

export const AuthenticationContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	max-width: 100%;
	width: 900px;
	justify-content: space-between;
	margin: 30px auto;
	@media (max-width: 900px) {
		flex-direction: column;
		align-items: center;
	}
`;
