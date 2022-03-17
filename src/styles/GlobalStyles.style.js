import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { styled, css } from 'styled-components'

export const FlexContainer = ({ direction, justifyContent, alignItems, width }: FlexProps) => css`
	width: ${width};
  display: flex;
  flex-direction: ${direction};
	flex-wrap: wrap;
	justify-content: ${justifyContent};
	align-items: ${alignItems};
`

export const Colors  = ({ text, bg }) => css`
  color: ${text};
  background-color: ${bg};
`;

export const GlobalStyles = createGlobalStyle`
	${normalize}
	
	:root {
		--light-grey: #F6F7F8;
		--black: #000;
		--white: #FFF;
		--dark-grey: #7e8893;

		--font-family-display: 'Merriweather', serif;

		--font-size-display: 48px;
		--font-size-h1: 40px;
		--font-size-h2: 33px;
		--font-size-h3: 27px;
		--font-size-h4: 23px;
		--font-size-h5: 19px;
		--font-size-base: 16px;
		--font-size-sm: 13px;
		--font-size-micro: 11px;

		--border: 1px solid var(--black);
	}

	@media (min-width: 768px) {
		:root {
		--font-size-display: 57px;
		--font-size-h1: 47px;
		--font-size-h2: 39px;
		--font-size-h3: 32px;
		--font-size-h4: 27px;
		--font-size-h5: 22px;
		--font-size-base: 19px;
		--font-size-sm: 16px;
		--font-size-micro: 13px;
		}
	}

	body {
		font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    background-color: var(--light-grey);
	}

	h2 {

	}

	ul, li {
		list-style: none;
		margin: 0;
		padding:0;
	}

	a {
		text-decoration: none;
		color: var(--black);
    }
    
    p, h1 {
        margin:0;
        padding: 0;
    }

`
