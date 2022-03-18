import React, { useContext, useState } from 'react'
import { FetchContext } from '../contexts/FetchContext'

import styled from 'styled-components'
import { FlexContainer, Colors } from '../styles/GlobalStyles.style'

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
		<StyledForm onSubmit={createKeywordSearch}>
			<input 
				type="search" 
				placeholder="Search" 
				onChange={inputHandler}
			/>
		</StyledForm>
	)
}

const StyledForm = styled.form`
	${FlexContainer({ direction: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '100%' })}
	input {
		${Colors({ 
			text: 'var(--black)',
			bg: 'var(--light-grey)'
		})}
		border: none;
		padding: 16px;
		border-radius: 25px;
		width: 300px;
	}
	input::placeholder {
		color: black;
	}
`