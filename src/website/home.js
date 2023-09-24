import './styles.css'
import { useState, useEffect } from 'react'
import Header from '../components/header'
import Listings from '../components/listings'
import useListings from '../hooks/useListings'
import LoadingListings from '../components/ui/loadingListings'

const Home = () => {
	const { listingsState } = useListings()
	const [searchTerm, setSearchTerm] = useState('')
	const [filteredProducts, setFilteredProducts] = useState(listingsState?.data?.Products)
	const [visibleProducts, setVisibleProducts] = useState(20)

	const handleSearch = event => {
		setSearchTerm(event.target.value)
	}

	const handleClearSearch = () => {
		// clear the search term
		setSearchTerm('')
	}

	const handleSubmit = event => {
		event?.preventDefault()
	}

	const handleLoadMore = () => {
		// Increase the number of visible products by 20 (or any desired amount)
		setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 20)
	}

	useEffect(() => {
		// Filter the products based on the search term
		const filtered = listingsState?.data?.Products.filter(product =>
			product.Title.toLowerCase().includes(searchTerm.toLowerCase()),
		)
		// setFilteredProducts(filtered)
		if (JSON.stringify(filtered) !== JSON.stringify(filteredProducts)) {
			setFilteredProducts(filtered)
		}
	}, [listingsState?.data?.Products, searchTerm, filteredProducts])

	if (listingsState?.loading) {
		return <LoadingListings count={20} />
	}

	if (listingsState?.error?.isNetworkError) {
		return <div>Network error</div>
	}

	return (
		<>
			<Header
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				handleClearSearch={handleClearSearch}
				handleSubmit={handleSubmit}
			/>
			<Listings
				visibleProducts={visibleProducts}
				handleLoadMore={handleLoadMore}
				listings={filteredProducts}
				handleClearSearch={handleClearSearch}
			/>
		</>
	)
}

export default Home
