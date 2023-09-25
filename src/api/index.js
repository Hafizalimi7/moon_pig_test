import Request from './request'

// Fetch card listings by making a GET request to '/search.json
export const getCardListings = () => {
	return Request.get({
		url: '/search.json',
	})
}

// Fetch card details for a specific Moonpig product using its product number
export const getCardDetails = moonpigProductNo => {
	return Request.get({
		url: `/product/${moonpigProductNo}.json`,
	})
}