import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	// border: 1px solid red;
	label {
		display: block;
		margin-bottom: 5px;
		color: rgba(52, 64, 84, 1);
	}
	input {
		font-size: 1rem;
		width: 100%;
		padding: 7px;
		outline: none;
		border: 2px solid rgba(208, 213, 221, 1);
		border-radius: 5px;
	}
`;

const Input = ({ type, placeholder, label, id, className }) => {
	return (
		<Container className={className}>
			<label>{label}</label>
			<input type={type} placeholder={placeholder} id={id} required />
		</Container>
	);
};

export default Input;