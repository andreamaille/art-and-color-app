import React from 'react'
import Gallery from '../components/Gallery'
import Header from "../components/Header"

export default function Home() {
  const defaultColor:string[] = ['blue', 'green', 'red']
  
  return (
    <>
      <Header colors={defaultColor} />
      <Gallery />
    </>
  )
}
