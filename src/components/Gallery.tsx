import React, { useState, useEffect } from 'react'
import Masonry from 'react-masonry-component';
import GalleryCard from './GalleryCard'
import { ArtworkData } from '../common/types'

const masonryOptions = {
	transitionDuration: 0,
	columnWidth: 100
}

export default function Gallery() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [ids, setIds] = useState([]);
	const [items, setItems] = useState([]);

	// Note: the empty deps array [] means this useEffect will run once similar to componentDidMount()
	useEffect(() => {
		fetch("https://api.artic.edu/api/v1/artworks")
			.then(res => res.json())
			.then(
				(response) => {
					setIsLoaded(true);

					response.data.forEach((item: any) => {

						const itemData = {
							artist: item.artist_title,
							title: item.title,
							date: item.date_display,
							image: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
							alt: item.thumbnail && item.thumbnail.alt_text,
							id: item.id,
							handle: item.title.replace(/[ ,.]/g, "-").replace(/[()]/g, "").toLowerCase(),
							medium_display: item.medium_display,
							color_hsl: item.color,
							place_of_origin: item.place_of_origin,
							department_title: item.department_title,
							classification_title: item.classification_title
						}

						setItems(items => [...items, itemData] as any)


					})


				},
				// Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, [])

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
		<>
			<Masonry
				className={'my-gallery-class'} // default ''
				elementType={'div'} // default 'div'
				options={masonryOptions} // default {}
				disableImagesLoaded={false} // default false
				updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
			>
				{createGalleryCard}
			</Masonry>
		</>
	)
}
