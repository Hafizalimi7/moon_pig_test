import { useState, useEffect } from 'react'
import { getCardDetails } from '../api'

const useDetailsData = ({ id }) => {
	const [listingDetailsState, setlistingDetailsState] = useState({ loading: true })

	// Use the useEffect hook to fetch listing details when 'id' changes.
	useEffect(() => {
		// Define an asynchronous function to fetch listing details.
		const getListingDetails = async () => {
			try {
				// Fetch listing details using 'getCardDetails' with the 'id'.
				const response = await getCardDetails(id)
				// Update the 'listingDetailsState' with the response data.
				setlistingDetailsState({ data: response.data, loading: false })
			} catch (error) {
				// Handle errors by updating 'listingDetailsState' with the error.
				setlistingDetailsState({ error: error, loading: false })
			}
		}
		// Call the 'getListingDetails' function when 'id' changes.
		getListingDetails()
	}, [id])

	return {
		listingDetailsState,
	}
}

export default useDetailsData
