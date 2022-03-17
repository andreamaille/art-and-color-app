import React, {useContext, createContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Swatch from './Colors'
import { ArtworkDataProps } from '../common/types'
import ColorSwatches from './ColorSwatches'

import styled from 'styled-components'
import { FlexContainer, Colors } from '../styles/GlobalStyles.style'

interface SizeProps {
    width: number,
    height: number
}

const calculateAspectRatioFit = (srcWidth:number, srcHeight:number, maxWidth:number = 400, maxHeight:number = 1000) => {
    const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight)
    return { width: srcWidth*ratio, height: srcHeight*ratio }
}

const GalleryCard: React.FC<ArtworkDataProps> = ({ artwork }) => {
    const width = artwork.image_width > 0 ? artwork.image_width : 400
    const height = artwork.image_height > 0 ? artwork.image_height : 600

    const size = calculateAspectRatioFit(width, height)

    return (
        <StyledCard className="image-element-class" key={artwork.id}>
            <Link
                to={`/artwork/${artwork.handle}`}
                state={{ data: artwork }}
            >
                <img src={artwork.image} alt={artwork.alt} width={size.width} height={size.height}/>
                <StyledCardContainer> 
                    <StyledTitle>{artwork.title}, {artwork.date}</StyledTitle>
                    <StyledArtistName>{artwork.artist}</StyledArtistName>
                    <StyledFlexContainer>
                        <StyledColorSwatchContainer>
                            <ColorSwatches image={artwork.image} numOfSwatches={3} />
                        </StyledColorSwatchContainer>
                    </StyledFlexContainer>
                </StyledCardContainer>
            </Link>
        </StyledCard>
    )
}

const StyledCard = styled.div`
	background-color: var(--white);
    width: 330px;
    border-radius: 5px;
    margin-bottom: 16px;
    box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.10);
    img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 100%;
    }
`

const StyledCardContainer = styled.div`
    padding: 8px 16px;
`

const StyledTitle = styled.p`
    font-family: 'Merriweather', serif;
    font-size: var(--font-size-sm);
    margin-bottom: 8px;
`

const StyledArtistName = styled.p`
    color: var(--dark-grey);
    font-size: var(--font-size-micro);
    margin-bottom: 8px;
`

const StyledFlexContainer = styled.div`
    ${FlexContainer({ direction: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%' })}
`
const StyledColorSwatchContainer = styled.div`
    width: 60px;
`
export default GalleryCard
