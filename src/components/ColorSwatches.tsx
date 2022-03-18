import React, { useState } from 'react'
import { ColorExtractor } from 'react-color-extractor'
import { useLocation } from 'react-router-dom'

import styled from 'styled-components'
import { FlexContainer } from '../styles/GlobalStyles.style'

const ColorSwatches: React.FC<{ image: string, numOfSwatches: number }> = ({ image, numOfSwatches }) => {
  const [colors, setColors] = useState([])

	const location = useLocation() as any 
	const path = location.pathname
	const isArtworkPage = path.includes('artwork')

	const renderSwatches = () => {
		const colorSwatches = colors.map((color, id) => {
			return (
				<div
					key={id}
					style={{
						backgroundColor: color,
						width: 20,
						height: 20
					}}
				/>
			)
		})

		return colorSwatches.slice(0, numOfSwatches)
	}

	const renderPalette = () => {
		const colorSwatches = colors.map((color, id) => {
			return (
				<>
					<StyledColorCard>
						<StyledColorSwatch color={color}></StyledColorSwatch>
						<StyledHexCode>{color}</StyledHexCode>
					</StyledColorCard>
				</>
			)
		})

		return colorSwatches.slice(0, numOfSwatches)
	}

	const getColors = (colors: any) => {
		setColors(colors)
  }
  
  return (
    <>
      <ColorExtractor 
        getColors={getColors} 
        src={image}
      />
			{isArtworkPage ? 
				<StyledFlexContainer>
					{renderPalette()}
				</StyledFlexContainer>
			:
				<div
					style={{
						marginTop: 20,
						display: 'flex',
						justifyContent: 'center'
					}}
				>
					{renderSwatches()}
				</div>
			}



    </>
  )

}

const StyledFlexContainer = styled.div`
	${FlexContainer({ direction: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' })}
`

const StyledColorCard = styled.div`
	background-color: var(--white);
	padding: 12px;
	border-radius: 5px;
`

const StyledColorSwatch = styled.div<{ color: string }>`
	background-color: ${props => props.color};	
	width: 75px;
	height: 75px;
`

const StyledHexCode = styled.div`
	background-color: var(--white);
	text-transform: uppercase;
	margin-top: 8px;
	font-weight: 500; 
	text-align: center;
`

export default ColorSwatches


					// <StyledColorCard>
					// 	<StyledColorSwatch color={color}></StyledColorSwatch>
					// 	<StyledHexCode>{color}</StyledHexCode>
					// </StyledColorCard>