import React, {useContext, createContext } from 'react'
import Swatch from './Colors'
import { Link } from 'react-router-dom'
import { ArtworkDataProps } from '../common/types'
import ColorSwatches from './ColorSwatches'

import styled from 'styled-components'
import { FlexContainer, Colors } from '../styles/GlobalStyles.style'


const GalleryCard: React.FC<ArtworkDataProps> = ({ artwork }) => {

    return (
        <StyledCard className="image-element-class" key={artwork.id}>
            <Link
                to={`/artwork/${artwork.handle}`}
                state={{ data: artwork }}
            >
                <img src={artwork.image} alt={artwork.alt}/>
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
    width: 275px;
    border-radius: 5px;
    margin-bottom: 16px;

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
