import React, { useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Header from "../components/Header"
import ArtworkPage from "../components/ArtworkPage"

import { ColorExtractor } from 'react-color-extractor'

const Artwork: React.FC = (props) => {
  const location = useLocation() as any

  const state = location.state
  const { data } = state;
  const [colors, setColors] = useState([])

  const getColors = (colors: any) => {
    setColors(colors)
  }

  return (
    <>
      <Header colors={colors} />
      <ColorExtractor
        src={data.image}
        getColors={getColors}
      />
      <ArtworkPage artwork={data} />
    </>
  )
}

export default Artwork
