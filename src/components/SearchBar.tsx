import React, { useContext, useState } from 'react'
import { FetchContext } from '../contexts/FetchContext'

export default function SearchBar() {
	const { keyword, setKeyword } = useContext(FetchContext)
	const [ searchTerm, setSearchTerm ] = useState('')

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputText = e.target.value.toLowerCase()
		setSearchTerm(inputText)
	}

	const createKeywordSearch = (e: React.SyntheticEvent) => {
		e.preventDefault()
		setKeyword(searchTerm)
	}

	return (
		<form onSubmit={createKeywordSearch}>
				<input type="search" placeholder="Search" onChange={inputHandler}/>
		</form>
	)
}