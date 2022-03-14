import React from 'react'
import Gallery from '../components/Gallery'
import Header from "../components/Header"

export default function Home() {
  const defaultColor:string[] = ['#FFFFFF', '#B1BCC8']

  return (
    <>
      <Header bgColor={defaultColor[0]} />
      <Gallery />
    </>
  )
}
