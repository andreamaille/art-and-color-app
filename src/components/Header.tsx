import React, { useState } from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import { FlexContainer, Colors } from '../styles/GlobalStyles.style'

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header: React.FC<{ bgColor: string }> = ({ bgColor }) => {
	const location = useLocation() as any
	const pathname = location.pathname

	return (
			<StyledHeader color={bgColor}>
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

const StyledHeader = styled.header<{ color: string }>`
	${FlexContainer({ direction: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' })}
	background-color: ${props => props.color};
	box-shadow: 0px 0px 9px 3px rgba(0,0,0,0.49);
	height: 125px;
	position: relative;
	z-index: 10;
		h1 {
			width: 100%;
		}			
`

const StyledWrapper = styled.div`
	${FlexContainer({ direction: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' })}
	padding: 0 24px;
	justify-content: space-between;
	align-items: center;
	max-width: 1440px;
`

const StyledHeaderContainer = styled.div`
	width: 40%;
	p {
		width: 70%;
	}
`

export default Header