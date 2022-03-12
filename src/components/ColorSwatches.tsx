import React, { useState } from 'react'
import { ColorExtractor } from 'react-color-extractor'

const ColorSwatches: React.FC<{ image: string }> = ({ image }) => {
  const [colors, setColors] = useState([])

	const renderSwatches = () => {
		return colors.map((color, id) => {
			return (
				<div
					key={id}
					style={{
						backgroundColor: color,
						width: 20,
						height: 20
					}}
				/>
			)
		})
	}

	const getColors = (colors: any) => {
		setColors(colors)
  }
  
  return (
    <>
      <ColorExtractor 
        getColors={getColors} 
        src={image}
      />

      <div
				style={{
					marginTop: 20,
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				{renderSwatches()}
			</div>
    </>
  )

}

export default ColorSwatches