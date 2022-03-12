import React from 'react'
import { ArtworkDataProps } from '../common/types'
import ColorSwatches from './ColorSwatches'

const ArtworkPage: React.FC<ArtworkDataProps> = ({ artwork }) => {
  return (
    <>
      <img src={artwork.image} alt={artwork.alt}/>
      <h1>{artwork.title}</h1>
      <h2>{artwork.artist}</h2>
      <ColorSwatches image={artwork.image}/>
    </>
  )
}

export default ArtworkPage
