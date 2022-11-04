import styled from 'styled-components';

export const MyCard = styled.div`
	margin: 1.2rem auto 1.2rem auto;
	background-color: ${({ theme }) => theme.colors.cardColor};
	border-radius: 4px;
	// box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.3);
	color: ${({ theme }) => theme.colors.textColor};
	padding: 1.875rem 0;
	position: relative;
	width: 1000px;
	max-width: 95%;
	text-align: center;
	.shareIcon {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 1px solid grey;
		border-style: dotted;
		position: absolute;
		right: 50px;
		top: 50px;
		cursor: pointer;
		img {
			width: 100%;
			height: 100%;
			object-fit: center;
		}
		.shareMobile {
			display: none;
		}
	}
	.shareIcon:before {
		content: '';
		z-index: 2;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: absolute;
		background-color: rgba(208, 213, 221, 0.3);
		display: none;
	}
	.shareIcon:hover::before {
		display: block;
	}
	.round {
		border: 1px solid #03bfcb;
		border-radius: 50%;
		padding: 7px;
		width: 120px;
		height: 120px;
		margin: auto;
		img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			object-fit: center;
		}
	}
	h3 {
		margin: 1rem 0;
	}
	p {
		font-size: 14px;
		margin-top: 4px;
	}
	.myLinks {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 15px;
		margin-top: 1rem;
	}
	.socials {
		margin-top: 1rem;
	}
	@media ${({ theme }) => theme.mediaQueries['below630']} {
		footer {
			flex-direction: column;
		}
		footer > * {
			margin-bottom: 1.5rem;
		}
		.share {
			display: none;
		}
		.shareIcon {
			.shareMobile {
				display: block;
			}
		}
	}
`;