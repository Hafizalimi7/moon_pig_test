import Request from './request'

export const getCardListings = () => {
	return Request.get({
		url: '/search.json',
	})
}

export const getCardDetails = moonpigProductNo => {
	return Request.get({
		url: `/product/${moonpigProductNo}.json`,
	})
}