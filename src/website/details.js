import { useParams } from 'react-router-dom'
import useDetailsData from '../hooks/useDetailsData'
import LoadingDetails from '../components/ui/loadingDetails'
import ProductDetails from '../components/productDetails'

const Details = () => {
	let { id } = useParams()
	const { listingDetailsState } = useDetailsData({ id })

	if (listingDetailsState?.loading) {
		return <LoadingDetails />
	}

	return (
		<>
			<ProductDetails
				Title={listingDetailsState?.data?.Title}
				Description={listingDetailsState?.data?.Description}
				AvailableSizes={listingDetailsState?.data?.AvailableSizes}
				AdditionalInfo={listingDetailsState?.data?.AdditionalInfo}
				InStock={listingDetailsState?.data?.InStock}
				ThumbnailUrl={listingDetailsState?.data?.ThumbnailUrl}
				ImageUrls={listingDetailsState?.data?.ImageUrls}
			/>
		</>
	)
}

export default Details