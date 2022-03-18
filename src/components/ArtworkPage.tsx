import React from 'react'
import { ArtworkDataProps } from '../common/types'
import ColorSwatches from './ColorSwatches'

import styled from 'styled-components'
import { FlexContainer } from '../styles/GlobalStyles.style'

const hexToRgb = (hex:string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : {
    r: 255,
    g: 255,
    b: 255
  }
}

const ArtworkPage: React.FC<ArtworkDataProps> = ({ artwork }) => {
  const bgColorHex = artwork.bgColor ? artwork.bgColor.replace('#', '') : 'FFFFFF'
  const bgColorInRbg = hexToRgb(bgColorHex)
  const rgbaString = `rgba(${bgColorInRbg.r},${bgColorInRbg.g},${bgColorInRbg.b},0.2)`

  return (
    <StyledArtworkPage bgColor={artwork.bgColor}>
      <StyledWrapper>
        <StyledImgContainer>
          <img src={artwork.image} alt={artwork.alt}/>
        </StyledImgContainer>
        <StyledTextContainer bgColor={rgbaString}>
          <StyledTextWrapper>
            <h1>{artwork.title}</h1>
            <h2>{artwork.artist}</h2>
            <p>{artwork.date}</p>
            <table>
              <tbody>
                <tr>
                  <td>Medium</td>
                  <td>{artwork.medium_display}</td>
                </tr>
                <tr>
                  <td>Place of Origin</td>
                  <td>{artwork.place_of_origin}</td>
                </tr>
                <tr>
                  <td>Classification</td>
                  <td>{artwork.classification_title}</td>
                </tr>
                <tr>
                  <td>Department</td>
                  <td>{artwork.department_title}</td>
                </tr>
              </tbody>
            </table>
            <ColorSwatches image={artwork.image} numOfSwatches={5}/>
          </StyledTextWrapper>
        </StyledTextContainer>
      </StyledWrapper>
    </StyledArtworkPage>
  )
}

const StyledArtworkPage = styled.div<{ bgColor?: string }>`
	background-color: ${props => props.bgColor};
  padding: 40px 0;
`

const StyledWrapper = styled.div<{ bgColor?: string }>`
	${FlexContainer({ direction: 'row', justifyContent: 'center', alignItems: 'stretch', width: '80%' })}
  background-color: white;
  margin: 0 auto;
  border-radius: 5px;
`

const StyledImgContainer = styled.div`
  width: 50%;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`

const StyledTextContainer = styled.div<{ bgColor?: string }>`
  width: 50%;
  background-color: ${props => props.bgColor};
  h1 {
    font-family: var(--font-family-display);
    font-weight: 400;
    font-size: var(--font-size-h5);
  }

  h2 {
    font-weight: 500;
    font-size: var(--font-size-h5);
    letter-spacing: 1px;
  }

  table {
    margin: 16px 0;
    width:100%;
  }

  table tr td {
    padding: 16px 0;
  }

  table tr td:first-child {
    font-weight: 500;
  }

  table tr:nth-of-type(3) {
    text-transform: capitalize;
  }
`

const StyledTextWrapper = styled.div`
  padding: 24px;
`

export default ArtworkPage
