import React, { useState } from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import { FlexContainer, Colors } from '../styles/GlobalStyles.style'

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header: React.FC<{ colors?: string[] }> = ({ colors }) => {
	const location = useLocation() as any
	const pathname = location.pathname

	const [bgColor, setBgColor ] = useState('')

	const setColors = bgColor === '' || bgColor === undefined
	const hasColors = colors && colors.length > 0

	if (setColors && colors && hasColors) {
		setBgColor(colors[0])
	}

	return (
			<StyledHeader bgColor={bgColor}>
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

const StyledHeader = styled.header<{ bgColor: string }>`
	${FlexContainer({ direction: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' })}
	background-color: ${props => props.bgColor};
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

export default Header