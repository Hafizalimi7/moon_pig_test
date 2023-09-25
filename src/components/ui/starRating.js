const StarRating = ({ rating }) => {
	// Round the rating to the nearest half star (you can adjust this logic as needed)
	const roundedRating = Math.round(rating * 2) / 2

	// Create an array to represent the star icons
	const stars = []
	for (let i = 1; i <= 5; i++) {
		if (i <= roundedRating) {
			// Full star
			stars.push(
				<svg
					key={i}
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='#FFD700'
					className='bi bi-star-fill'
					viewBox='0 0 16 16'>
					<path d='M8 .29l1.96 4.39 5.4.49a.47.47 0 0 1 .26.82l-3.9 3.59.93 5.32a.47.47 0 0 1-.68.5L8 12.69l-4.85 2.82a.47.47 0 0 1-.68-.5l.93-5.32-3.9-3.59a.47.47 0 0 1 .26-.82l5.4-.49L8 .29z' />
				</svg>,
			)
		} else if (i - 0.5 === roundedRating) {
			// Half star
			stars.push(
				<svg
					key={i}
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='#FFD700'
					className='bi bi-star-half'
					viewBox='0 0 16 16'>
					<path d='M8 .29l1.96 4.39 5.4.49a.47.47 0 0 1 .26.82l-3.9 3.59.93 5.32a.47.47 0 0 1-.68.5L8 12.69V.29z' />
				</svg>,
			)
		} else {
			// Empty star
			stars.push(
				<svg
					key={i}
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='#FFD700'
					className='bi bi-star'
					viewBox='0 0 16 16'>
					<path d='M8 .29l1.96 4.39 5.4.49a.47.47 0 0 1 .26.82l-3.9 3.59.93 5.32a.47.47 0 0 1-.68.5L8 12.69V.29z' />
				</svg>,
			)
		}
	}

	return <div className='starRating'>{stars}</div>
}

export default StarRating
