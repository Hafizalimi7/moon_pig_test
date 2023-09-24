import PropTypes from 'prop-types'

const Card = ({ Title, ProductImage }) => {
	return (
		<div className='cardContainer'>
			<img src={ProductImage.Link.Href} height='300px' width='300px' alt={Title} />
			<div className='cardTitle'>{Title}</div>
		</div>
	)
}

Card.propTypes = {
	title: PropTypes.string,
	ProductImage: PropTypes.string,
}

export default Card