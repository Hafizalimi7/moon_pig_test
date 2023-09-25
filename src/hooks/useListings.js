import { useState, useEffect } from 'react'
import { getCardListings } from '../api'

const useListings = () => {
	const [listingsState, setlistingsState] = useState({ loading: true })

	useEffect(() => {
		const getListings = async () => {
			try {
				// Fetch listings using 'getCardListings'.
				const response = await getCardListings()
				// Update 'listingsState' with the response data.
				setlistingsState({ data: response.data, loading: false })
			} catch (error) {
				setlistingsState({ error: error, loading: false })
			}
		}

		getListings()
	}, [])

	return {
		listingsState,
	}
}

export default useListings

