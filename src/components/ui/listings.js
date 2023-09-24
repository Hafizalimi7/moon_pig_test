import PropTypes from 'prop-types'
import Card from './card'

const Listings = ({ listings }) => {
	return (
		<div className='ListingsContainer'>
			{listings?.map(listing => ( <Card key={listing.MoonpigProductNo} Title={listing.Title} ProductImage={listing.ProductImage}/> ))}
		</div>
	)
}

export default Listings