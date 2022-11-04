import React from 'react';
import zuri from '../../resources/zuri.png';
import I4G from '../../resources/I4G.png';
import styled from 'styled-components';

const Container = styled.footer`
	width: 1000px;
	max-width: 95%;
	border-top: 1px solid #f4f5f7;
	padding: 1.875rem 0.9375rem;
	margin: 2rem auto 1rem auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media ${({ theme }) => theme.mediaQueries['below630']} {
		flex-direction: column;
		& > * {
			margin-bottom: 1.5rem;
		}
	}
`;

const Footer = () => {
	return (
		<Container>
			<div>
				<img src={zuri} alt='zuri' />
			</div>
			<p>HNG Internship 9 Frontend Task</p>
			<div>
				<img src={I4G} alt='i4g' />
			</div>
		</Container>
	);
};

export default Footer;