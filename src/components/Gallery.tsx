import React, { useState, useEffect } from 'react'
import Masonry from 'react-masonry-component';
import GalleryCard from './GalleryCard'

const masonryOptions = {
	transitionDuration: 0,
	columnWidth: 100
}

interface ItemData {
	artist: string,
	image: string,
	title: string,
	id: number,
	date: string,
	handle: string
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
						console.log(item)

						const itemData = {
							artist: item.artist_title,
							title: item.title,
							date: item.date_display,
							image: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
							id: item.id,
							handle: item.title.replace(/[ ,.]/g, "-").replace(/[()]/g, "").toLowerCase()
						}

						setItems(items => [...items, itemData] as any)
					})

					console.log(items)

				},
				// Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, [])

	const createGalleryCard = items.map(function (item: ItemData) {
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
