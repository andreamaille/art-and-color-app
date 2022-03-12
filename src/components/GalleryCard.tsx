import React from 'react'
import Colors from './Colors'
import { Link } from 'react-router-dom'
import { ArtworkDataProps } from '../common/types'

const GalleryCard: React.FC<ArtworkDataProps> = ({ artwork }) => {
    return (
        <div className="image-element-class" >
            <Link
                to={`/artwork/${artwork.handle}`}
                state={{ data: artwork }}
            >
                <div>
                    <div>{artwork.title}, {artwork.date}</div>
                    <div>{artwork.artist}</div>
                    
                    <Colors image={artwork.image} />
                </div>
            </Link>

        </div>
    )
}

export default GalleryCard
