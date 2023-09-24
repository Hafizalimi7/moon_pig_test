import PropTypes from 'prop-types'
import Card from './card'

const Listings = ({ listings }) => {
	return listings?.map(listing => <Card key={listing.MoonpigProductNo} title={listing.Title} />)
}

Listings.propTypes = {
	listings: PropTypes.array,
}

export default Listings