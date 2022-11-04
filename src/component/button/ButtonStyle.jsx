import styled from 'styled-components';

export const MyButton = styled.button`
	width: 100%;
	border: 1px solid transparent;
	border-radius: 2px;
	font-size: clamp(0.95rem, 1.5vw, 1.1rem);
	padding: 15px;
	background-color: ${({ theme }) => theme.colors.buttonColor};
	box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	a {
		color: ${({ theme }) => theme.colors.textColor};
		text-decoration: none;
	}
	:hover {
		background-color: ${({ theme }) => theme.colors.buttonHoverColor};
	}
`;