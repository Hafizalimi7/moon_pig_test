import './App.css'
import { useState } from 'react'
import Header from './components/header'
import Listings from './components/ui/listings'
import useListings from './hooks/useListings'
import LoadingListings from './components/ui/loadingListings'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
	const { listingsState } = useListings()

  const handleSearch = event => {
		setSearchTerm(event.target.value)
	}

	const handleSubmit = event => {
		event?.preventDefault()
	}

	if (listingsState.loading) {
		return <LoadingListings count={12} />
	}
	return (
		<div className='App'>
			<Header searchTerm={searchTerm} handleSearch={handleSearch} handleSubmit={handleSubmit} />
			<Listings listings={listingsState?.data?.Products} />
		</div>
	)
}

export default App;
