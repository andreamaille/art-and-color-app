import React from 'react'
import { ArtworkDataProps } from '../common/types'
import ColorSwatches from './ColorSwatches'

import styled from 'styled-components'
import { FlexContainer } from '../styles/GlobalStyles.style'

const ArtworkPage: React.FC<ArtworkDataProps> = ({ artwork }) => {
  return (
    <StyledArtworkPage bgColor={artwork.bgColor}>
      <StyledWrapper>
        <StyledImgContainer>
          <img src={artwork.image} alt={artwork.alt}/>
        </StyledImgContainer>
        <StyledTextContainer bgColor={artwork.bgColor}>
          <StyledTextWrapper>
            <h1>{artwork.title}</h1>
            <h2>{artwork.artist}</h2>
            <p>{artwork.date}</p>
            <p>{artwork.medium_display}</p>
            <p>{artwork.place_of_origin}</p>
            <ColorSwatches image={artwork.image} numOfSwatches={5}/>
          </StyledTextWrapper>
        </StyledTextContainer>
      </StyledWrapper>
    </StyledArtworkPage>
  )
}

const StyledArtworkPage = styled.div<{ bgColor?: string }>`
	/* ${FlexContainer({ direction: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' })} */
	background-color: ${props => props.bgColor};
  padding: 40px 0;
`

const StyledWrapper = styled.div<{ bgColor?: string }>`
	${FlexContainer({ direction: 'row', justifyContent: 'center', alignItems: 'center', width: '80%' })}
  background-color: white;
  margin: 0 auto;
  border-radius: 5px;
`

const StyledImgContainer = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 100%;
  }
`

const StyledTextContainer = styled.div<{ bgColor?: string }>`
  width: 50%;
  background-color: ${props => props.bgColor};
  h1 {
    font-family: var(--font-family-display);
  }
`

const StyledTextWrapper = styled.div`
  padding: 24px;
`

export default ArtworkPage


