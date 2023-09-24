import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './styles.css'

const LoadingListings = ({ count }) => {
	return (
		<div className='loadingListingsContainer'>
			<Skeleton containerClassName='searchBarLoadingClassName' />
			<Skeleton containerClassName='containerClassName' count={count} width={250} height={400} />
		</div>
	)
}

LoadingListings.propTypes = {
	count: PropTypes.number,
}

export default LoadingListings