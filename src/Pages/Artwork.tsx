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
  
  const [bgColor, setBgColor ] = useState('')

	const hasColors = colors && colors.length > 0
  const assignColors = colors === undefined || bgColor === ''

  
	if (assignColors && colors && hasColors) {
		setBgColor(colors[0])
  }

  const [pageColors, setPageColors] = useState({})
  
  if (assignColors && colors && hasColors) {
    setPageColors({
      bgColor: colors[1],
      cardColor: colors[2]
    })
  }

  const artworkData = {
    ...data,
    ...pageColors
  }

  return (
    <>
      <Header bgColor={bgColor}/>
      <ColorExtractor
        src={data.image}
        getColors={getColors}
      />
      <ArtworkPage artwork={artworkData} />
    </>
  )
}

export default Artwork
