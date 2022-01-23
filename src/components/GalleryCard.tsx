import React from 'react'
import Colors from './Colors'
import { Link } from 'react-router-dom'

interface GalleryProps {
    artwork: {
        artist: string,
        image: string,
        title: string,
        id: number,
        date: string,
        handle: string
    }

}

const GalleryCard: React.FC<GalleryProps> = ({ artwork }) => {
    return (
        <div className="image-element-class" >
            <Link
                to={`/artwork/${artwork.handle}`}
                state={{ data: 'occupation again' }}
            >
                <h1>artworkData.title</h1>
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
