import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './styles.css'

const LoadingDetails = () => {
	return (
		<div className='loadingDetailsContainer'>
			<Skeleton containerClassName='loadingDetailsImage' count={1} width={350} height={450} />
			<div>
				<Skeleton containerClassName='loadingCardInfo' count={1} width={350} height={350} />
				<Skeleton containerClassName='loadingBuyMe' />
			</div>
		</div>
	)
}

LoadingDetails.propTypes = {
	count: PropTypes.number,
}

export default LoadingDetails