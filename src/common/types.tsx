export interface ArtworkData {
  artist: string,
  image: string,
  alt: string,
  title: string,
  id: number,
  date: string,
  handle: string,
  medium_display: string,
  color_hsl: {
    h: number,
    l: number,
    s: number,
    percentage: number,
    population: number
  },
  place_of_origin: string,
  department_title: string,
  classification_title: string,
  image_width: number,
  image_height: number
}

export interface ArtworkDataProps {
  artwork: {
    artist: string,
    image: string,
    alt: string,
    title: string,
    id: number,
    date: string,
    handle: string
    medium_display: string,
    color_hsl: {
      h: number,
      l: number,
      s: number,
      percentage: number,
      population: number
    },
    place_of_origin: string,
    department_title: string,
    classification_title: string,
    bgColor?: string,
    cardColor?: string,
    image_width: number,
    image_height: number
  }
}

export interface ColorProps {

}