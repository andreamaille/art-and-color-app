import React from 'react'
import Colors from './Colors'

const GalleryCard: React.FC<{ title: string, image: string, artist: string, date: string }> = ({ image, title, artist, date }) => {

    return (
        <div className="image-element-class" >
            {/* <img src={image} alt="" /> */}
            <div>{title}, {date}</div>
            <div>{artist}</div>
            <Colors image={image} />
        </div>
    )
}

export default GalleryCard
