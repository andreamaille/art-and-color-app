import React from 'react'
import { ArtworkDataProps } from '../common/types'
import ColorSwatches from './ColorSwatches'

import styled from 'styled-components'
import { FlexContainer, Colors } from '../styles/GlobalStyles.style'

const ArtworkPage: React.FC<ArtworkDataProps> = ({ artwork }) => {
  return (
    <StyledArtworkPage bgColor={artwork.bgColor}>
      <StyledWrapper>
        <StyledImgContainer>
          <img src={artwork.image} alt={artwork.alt}/>
        </StyledImgContainer>
        <StyledTextContainer>
          <h1>{artwork.title}</h1>
          <h2>{artwork.artist}</h2>
          <ColorSwatches image={artwork.image} numOfSwatches={5}/>
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

const StyledTextContainer = styled.div`
  width: 50%;
`

export default ArtworkPage


