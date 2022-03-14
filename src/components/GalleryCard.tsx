import React from 'react'
import Swatch from './Colors'
import { Link } from 'react-router-dom'
import { ArtworkDataProps } from '../common/types'
import ColorSwatches from './ColorSwatches'

import styled from 'styled-components'
import { FlexContainer, Colors } from '../styles/GlobalStyles.style'

const GalleryCard: React.FC<ArtworkDataProps> = ({ artwork }) => {
    return (
        <StyledCard className="image-element-class" >
            <Link
                to={`/artwork/${artwork.handle}`}
                state={{ data: artwork }}
            >
                <div>
                    <img src={artwork.image} />
                    <p>{artwork.title}, {artwork.date}</p>
                    <p>{artwork.artist}</p>
                    <ColorSwatches image={artwork.image} numOfSwatches={3}/>
                </div>
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


export default GalleryCard
