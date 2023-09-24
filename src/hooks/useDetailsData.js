import { useState, useEffect } from 'react'
import { getCardDetails } from '../api'

const useDetailsData = ({ id }) => {
	const [listingDetailsState, setlistingDetailsState] = useState({ loading: true })

	useEffect(() => {
		const getListingDetails = async () => {
			try {
				const response = await getCardDetails(id)
				setlistingDetailsState({ data: response.data, loading: false })
			} catch (error) {
				setlistingDetailsState({ error: error, loading: false })
			}
		}

		getListingDetails()
	}, [id])

	return {
		listingDetailsState,
	}
}

export default useDetailsData