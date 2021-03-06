import React, { useState } from 'react'
import { ColorExtractor } from 'react-color-extractor'

const Colors: React.FC<{ image: string }> = ({ image }) => {
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
		<div>
			<ColorExtractor getColors={getColors}>
				<img
					src={image}
					alt=""
				/>
			</ColorExtractor>

			<div
				style={{
					marginTop: 20,
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				{renderSwatches()}
			</div>
		</div>
	)
}

export default Colors