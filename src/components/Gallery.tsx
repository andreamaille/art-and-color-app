import React, { useState, useEffect, useContext } from 'react'
import { FetchContext } from '../contexts/FetchContext'
import Masonry from 'react-masonry-component';
import GalleryCard from './GalleryCard'
import Loader from './Loader'
import { ArtworkData } from '../common/types'

import styled from 'styled-components'
import { FlexContainer, Colors } from '../styles/GlobalStyles.style'

const masonryOptions = {
	transitionDuration: 0,
	columnWidth: '.image-element-class',
	// itemSelector: '.my-gallery-class',
	gutter: 16,
	isFitWidth: true,
	fitWidth: true
}

export default function Gallery() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [ids, setIds] = useState([]);
	const [items, setItems] = useState([]);

	const { keyword, setKeyword } = useContext(FetchContext)

	// Note: the empty deps array [] means this useEffect will run once similar to componentDidMount()
	useEffect(() => {

		const fieldsArray = [
			'artist_title',
			'title',
			'date_display',
			'image_id',
			'thumbnail',
			'id',
			'medium_display',
			'color',
			'place_of_origin',
			'department_title',
			'classification_title'
		]

		const fields = fieldsArray.join(",")

		// fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=30")
		fetch(`https://api.artic.edu/api/v1/artworks/search?q=${keyword}&fields=${fields}&page=2&limit=25`)
			.then(res => res.json())
			.then(
				(response) => {
					
					setItems([])

					response.data.forEach((item: any) => {
						console.log(item)
						const itemData = {
							artist: item.artist_title,
							title: item.title,
							date: item.date_display,
							image_id: item.image_id,
							image: `https://www.artic.edu/iiif/2/${item.image_id}/full/400,/0/default.jpg`,
							alt: item.thumbnail && item.thumbnail.alt_text,
							id: item.id,
							handle: item.title.replace(/[ ,.]/g, "-").replace(/[()]/g, "").toLowerCase(),
							medium_display: item.medium_display,
							color_hsl: item.color,
							place_of_origin: item.place_of_origin,
							department_title: item.department_title,
							classification_title: item.classification_title,
							image_width: item.thumbnail && item.thumbnail.width,
							image_height: item.thumbnail && item.thumbnail.height
						}

						setItems(items => [...items, itemData] as any)
		
					})

					setIsLoaded(true);
				},
				// Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, [keyword, setKeyword])

	const createGalleryCard = items.map(function (item: ArtworkData) {
		return (
			<div>
				<GalleryCard
					key={`item-${item.id}`}
					artwork={item}
				/>
			</div>

		);
	});

	return (
		<StyledContainer>
		{ isLoaded ?
			<Masonry
				className={'my-gallery-class'} // default ''
				elementType={'div'} // default 'div'
				options={masonryOptions} // default {}
				disableImagesLoaded={false} // default false
				updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
			>
				{createGalleryCard}
			</Masonry> : <Loader />
		}
		</StyledContainer>
	)
}


const StyledContainer = styled.div`
	background-color: var(--light-grey);
	max-width: 1440px;
	margin: 0 auto;
	padding: 24px;
`
