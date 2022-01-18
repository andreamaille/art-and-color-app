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
					crossOrigin="anonymous"
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

// export default function Colors () {
//     const [colors, setColors] = useState([])

//     const renderSwatches = () => {
//         return colors.map((color, id) => {
//             return (
//                 <div
//                     key={id}
//                     style={{
//                         backgroundColor: color,
//                         width: 100,
//                         height: 100
//                     }}
//                 />
//             )
//         })
//     }

//     const getColors = (colors: any) => {
//         setColors(colors)
//     }


//     return (
//             <div>
//                 <ColorExtractor getColors={getColors}>
//                     <img
//                         src="https://www.artic.edu/iiif/2/b3974542-b9b4-7568-fc4b-966738f61d78
// /full/843,/0/default.jpg"
//                         style={{ width: 700, height: 500 }}
//                     />
//                 </ColorExtractor>

//                 <div
//                     style={{
//                         marginTop: 20,
//                         display: 'flex',
//                         justifyContent: 'center'
//                     }}
//                 >
//                     {renderSwatches()}
//                 </div>
//             </div>
//     )

// }



// export default class App extends React.Component {
    // state = { colors: [] }

    // renderSwatches = () => {
    //     const { colors } = this.state

    //     return colors.map((color, id) => {
    //         return (
    //             <div
    //                 key={id}
    //                 style={{
    //                     backgroundColor: color,
    //                     width: 100,
    //                     height: 100
    //                 }}
    //             />
    //         )
    //     })
    // }

    // getColors = (colors:any) =>
    //     this.setState(state => ({ colors: [...state.colors, ...colors] }))

//     render() {
//         return (

//         )
//     }
// }