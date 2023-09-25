import './styles.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import ReactHtmlParser from 'html-react-parser'

const ProductDetails = ({ SizeName, Title, Description, AvailableSizes, AdditionalInfo, InStock, ThumbnailUrl, ImageUrls }) => {
	const carouselImageURLs = [ThumbnailUrl]
	
	// Extract ImageUrls from an array of objects and create a new array of URLs.
	ImageUrls?.forEach(item => {
		carouselImageURLs.push(item.ImageUrl)
	})

	const CarouselImages = () => {
		return (
			<Carousel
				width='350px'
				showArrows={true}
				swipeable={true}
				showStatus={false}
				showIndicators={true}
				showThumbs={false}>
				{carouselImageURLs?.map(url => (
					<div key={url.toString()}>
						<img src={url} height='400px' alt={Title} />
					</div>
				))}
			</Carousel>
		)
	}
	return (
		<>
			<div className='ProductDetailsContainer'>
				<div className='ProductImagesContainer'>
					<CarouselImages />
				</div>
				<div className='ProductDetailsInfoContainer'>
					<div className='ProductDetailsInfo'>
						<div className='ProductDetailsInfo__Details'>{ReactHtmlParser(Description)}</div>
						{InStock ? (
							<div className='ProductDetailsInfo__InStock'>
								<svg
									stroke='#b92e4d'
									fill='#b92e4d'
									strokeWidth='0'
									viewBox='0 0 16 16'
									height='1.5em'
									width='1.5em'
									xmlns='http://www.w3.org/2000/svg'>
									<path d='M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z'></path>
									<path d='M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z'></path>
								</svg>
								<span className='ProductDetailsInfo__InStock--text'>In stock</span>
							</div>
						) : (
							<div className='ProductDetailsInfo__InStock'>
								<svg
									stroke='#b92e4d'
									fill='#b92e4d'
									strokeWidth='0'
									viewBox='0 0 16 16'
									height='1.5em'
									width='1.5em'
									xmlns='http://www.w3.org/2000/svg'>
									<path d='M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z'></path>
									<path d='M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'></path>
								</svg>
								<span className='ProductDetailsInfo__InStock--text'>Out of stock</span>
							</div>
						)}
					</div>
					<div className='buyMe'>
						<div>
							<svg
								stroke='#fff'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								aria-hidden='true'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'></path>
							</svg>
						</div>
						<div className='buyMeText'>Buy Me</div>
					</div>
				</div>
			</div>
			<a className='BackToHome' href='/'>
				<svg
					stroke='#b92e4d'
					fill='#b92e4d'
					strokeWidth='0'
					viewBox='0 0 16 16'
					height='1em'
					width='1em'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'></path>
				</svg>
				Back Home
			</a>
		</>
	)
}

export default ProductDetails
