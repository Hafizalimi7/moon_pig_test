import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Details from './website/details'
import ProductDetails from './components/productDetails'
// Mock the useDetailsData hook
jest.mock('../src/hooks/useDetailsData', () => ({
	__esModule: true,
	default: ({ id }) => ({
		listingDetailsState: {
			loading: false,
			data: {
				Title: 'Sample Product',
				Description: 'Product description',
				AvailableSizes: ['Small', 'Medium'],
				AdditionalInfo: 'Additional information',
				InStock: true,
				ThumbnailUrl: 'https://example.com/thumbnail.jpg',
				ImageUrls: [{ ImageUrl: 'https://example.com/image1.jpg' }, { ImageUrl: 'https://example.com/image2.jpg' }],
			},
		},
	}),
}))

describe('Should render the Details page without any errors', () => {
	it('renders the details page without errors', () => {
		render(
			<Router>
				<Details />
			</Router>,
		)
	})
})

describe('Should render the Details component without any errors', () => {
	it('renders the details component without errors', () => {
		render(
			<ProductDetails
				Title='Sample Product'
				Description='Product description'
				AvailableSizes={['Small', 'Medium']}
				AdditionalInfo='Additional information'
				InStock={true}
				ThumbnailUrl='https://example.com/thumbnail.jpg'
				ImageUrls={[{ ImageUrl: 'https://example.com/image1.jpg' }, { ImageUrl: 'https://example.com/image2.jpg' }]}
			/>,
		)
	})
})

const mockProduct = {
	Title: 'Sample Product',
	Description: 'Product description',
	AvailableSizes: ['Small', 'Medium'],
	AdditionalInfo: 'Additional information',
	InStock: true,
	ThumbnailUrl: 'https://example.com/thumbnail.jpg',
	ImageUrls: [{ ImageUrl: 'https://example.com/image1.jpg' }, { ImageUrl: 'https://example.com/image2.jpg' }],
}

test('Should display product details', () => {
	render(<ProductDetails {...mockProduct} />)

	// You can use screen queries to check for elements rendered based on the mock data.
	expect(screen.getByText('Product description')).toBeInTheDocument()
	expect(screen.getByText('In stock')).toBeInTheDocument()
	expect(screen.getByText('Buy Me')).toBeInTheDocument()
})