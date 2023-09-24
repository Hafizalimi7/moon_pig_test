import './styles.css'

const SearchBar = ({ searchTerm, handleSearch, handleClearSearch, handleSubmit }) => {
	return (
		<form className='searchBarContainer' onSubmit={handleSubmit}>
			<input className='searchBarInput' type='text' placeholder='Search...' value={searchTerm} onChange={handleSearch} />			
			{searchTerm && (
				<div className='searchBarIcon' onClick={handleClearSearch}>
					<svg
						stroke='#84879a'
						fill='#84879a'
						strokeWidth='0'
						viewBox='0 0 24 24'
						height='1.5em'
						width='1.5em'
						xmlns='http://www.w3.org/2000/svg'>
		<path fill='none' d='M0 0h24v24H0V0z'></path>
						<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'></path>					</svg>
				</div>
			)}
		</form>
	)
}

export default SearchBar