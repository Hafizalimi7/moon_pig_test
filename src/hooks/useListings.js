import { useState, useEffect } from 'react'
import { getCardListings } from '../api'

const useListings = () => {
	const [listingsState, setlistingsState] = useState({ loading: true })

	useEffect(() => {
		const getListings = async () => {
			try {
				const response = await getCardListings()
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

