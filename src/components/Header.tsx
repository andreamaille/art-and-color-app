import React from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import { FlexContainer, Colors } from '../styles/GlobalStyles.style'

import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<StyledHeader>
			<StyledWrapper>
				<StyledHeaderContainer >
					<Link to="/">
						<h1>Art by Color</h1>
					</Link>
					<p>Discover color palettes by exploring art from the Art Institute of Chicago</p>
				</ StyledHeaderContainer>
				<StyledHeaderContainer >
					<SearchBar />
				</StyledHeaderContainer >
			</StyledWrapper>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	${Colors({ text: 'var(--black)', bg: 'var(--white)' })}
	${FlexContainer({ direction: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' })}
	height: 125px;
		h1 {
			width: 100%;
		}
`

const StyledWrapper = styled.div`
	${FlexContainer({ direction: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' })}
	padding: 0 24px;
	justify-content: space-between;
	align-items: center;
`

const StyledHeaderContainer = styled.div`
	width: 40%;
	p {
		width: 70%;
	}
`