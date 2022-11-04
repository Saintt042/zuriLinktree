import styled from 'styled-components';
import { MyButton } from '../../component/button/ButtonStyle';

export const Form = styled.form`
	margin: 2rem auto;
	width: 85%;
	max-width: 750px;
	p {
		margin-top: 1rem;
		color: #475467;
	}
`;
export const Textarea = styled.div`
	// border: 1px solid red;
	label {
		display: block;
		padding-bottom: 5px;
		color: rgba(52, 64, 84, 1);
	}
	textarea {
		font-size: 1rem;
		width: 100%;
		padding: 7px;
		outline: none;
		border: 2px solid rgba(208, 213, 221, 1);
		border-radius: 5px;
	}
`;

export const Checkbox = styled.div`
	margin: 1rem 0;
	input {
		margin-right: 5px;
	}
	label {
		color: rgba(102, 112, 133, 1);
	}
`;

export const Grid = styled.div`
	margin: 2rem 0;
	// border: 1px solid red;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;
	.email-input {
		grid-column: 1 / span 3;
	}
	.textarea {
		grid-column: 1 / span 3;
	}
	@media ${({ theme }) => theme.mediaQueries['below630']} {
		grid-template-columns: 1fr;
		// border: 1px solid blue;
		.email-input {
			grid-column: 1;
		}
		.textarea {
			grid-column: 1;
		}
	}
`;

export const FormButton = styled(MyButton)`
	border-radius: 5px;
	background: #1570ef;
	color: white;
	:hover {
		background: #175cd3;
	}
`;