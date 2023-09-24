import StarRating from './starRating'

const Card = ({ Title, ProductImage, Reviews, Price, MoonpigProductNo }) => {
	return (
		<a className='cardContainer' title='See more card information' href={`/card/${MoonpigProductNo}`}>
        <img className='cardImage' src={ProductImage?.Link?.Href} height='200px' width='250px' alt={Title} />			<div className='cardTitle'>{Title}</div>
			{Reviews && (
				<div className='cardRatingContainer'>
				<StarRating rating={Reviews?.AverageStarReviewRating} />
					<span className='cardRatingReviewCount'>({Reviews?.ReviewCount})</span>					<span className='cardRatingReviewCount'>({Reviews.ReviewCount})</span>
				</div>
			)}
			<div className='cardPrice'>
                <span>{Price?.Currency}</span>
				<span>{Price?.Value}</span>
			</div>

			<div className='cardLink'>See more</div>
		</a>
	)
}

Card.propTypes = {
	title: PropTypes.string,
	ProductImage: PropTypes.object,
	Reviews: PropTypes.object,
	Price: PropTypes.object,
}

export default Card