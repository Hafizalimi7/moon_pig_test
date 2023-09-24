import './App.css'
import Listings from './components/ui/listings'
import useListings from './hooks/useListings'
import LoadingListings from './components/ui/loadingListings'

const App = () => {
	const { listingsState } = useListings()

	if (listingsState.loading) {
		return <LoadingListings count={10} />
	}
	return (
		<div className='App'>
			<h1>App</h1>
			<Listings listings={listingsState?.data?.Products} />
		</div>
	)
}

export default App;
