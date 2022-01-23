import React from 'react'
import { GlobalStyles } from '../styles/GlobalStyles.style'
import { Routes, Route } from 'react-router-dom'
import About from '../Pages/About';
import Home from '../Pages/Home';
import Artwork from '../Pages/Artwork';
import Error from '../Pages/Error';

export default function Layout() {
	return (
		<>	
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/artwork/:title" element={<Artwork />} />
				<Route path="*" element={<Error />} />
      </Routes>
		</>
	)
}
