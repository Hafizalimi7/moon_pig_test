import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from './website/home' // Import your Home component

// Mock the useListings hook to provide test data
jest.mock('../src/hooks/useListings', () => ({
	__esModule: true,
	default: () => ({
		listingsState: {
			data: {
				Products: [
					{ Title: 'Product 1', MoonpigProductNo: 'pu041d' },
					{ Title: 'Product 2', MoonpigProductNo: 'pu041e' },
					{ Title: 'Product 3', MoonpigProductNo: 'pu041f' },
				],
			},
			loading: false,
			error: null,
		},
	}),
}))

test('Should render the Home component and list listings', () => {
	render(<Home />)

	// Ensure the Listings component is rendered
	expect(screen.getByText('Product 1')).toBeInTheDocument()
	expect(screen.getByText('Product 2')).toBeInTheDocument()
	expect(screen.getByText('Product 3')).toBeInTheDocument()
})

test('Should correctly display search input results', () => {
	render(<Home />)
	const searchInput = screen.getByPlaceholderText('Search...')

	// Simulate typing in the search input
	fireEvent.change(searchInput, { target: { value: 'Product 1' } })

	// Ensure the filtered product is displayed
	expect(screen.getByText('Product 1')).toBeInTheDocument()
	expect(screen.queryByText('Product 2')).not.toBeInTheDocument()
	expect(screen.queryByText('Product 3')).not.toBeInTheDocument()
})

test('Should display empty results for search input not found', () => {
	render(<Home />)
	const searchInput = screen.getByPlaceholderText('Search...')

	// Simulate typing in the search input
	fireEvent.change(searchInput, { target: { value: 'Product 4' } })

	// Ensure the filtered product is displayed
	expect(screen.queryByText('Product 1')).not.toBeInTheDocument()
	expect(screen.queryByText('Product 2')).not.toBeInTheDocument()
	expect(screen.queryByText('Product 3')).not.toBeInTheDocument()

	expect(screen.getByText('Clear search field')).toBeInTheDocument()
})
