import PropTypes from 'prop-types'
import Card from './ui/card'
import EmptyResults from '../empty-results.svg'

const Listings = ({ visibleProducts, handleLoadMore, listings, handleClearSearch }) => {
	return (
		<section>
			<div className='ListingsContainer'>
				{listings?.length === 0 ? (
					<div className='EmptyListingsContainer'>
						<img src={EmptyResults} width='300px' height='300px' alt='empty-results' />
						<div onClick={handleClearSearch} className='clearSearchText'>
							Clear search field
						</div>
					</div>
				) : (
					listings
						?.slice(0, visibleProducts)
						?.map(listing => (
							<Card
								key={listing.MoonpigProductNo}
								Title={listing.Title}
								ProductImage={listing.ProductImage}
								Reviews={listing.Reviews}
								Price={listing.Price}
								MoonpigProductNo={listing.MoonpigProductNo}
							/>
						))
				)}
			</div>
			<div className='LoadMoreButtonContainer'>
				{visibleProducts < listings?.length && <button onClick={handleLoadMore}>View More</button>}
			</div>
		</section>
	)
}

Listings.propTypes = {
	listings: PropTypes.array,
}

export default Listings