import axios from 'axios'

const BASE_URL = 'https://moonpig.github.io/tech-test-frontend'

// A reusable async function for making HTTP requests using Axios.
// It handles successful responses and common error scenarios.
const request = async function (req) {
	try {
		const response = await axios(req)
		return response
	} catch (e) {
		if (e.response) {
			const {
				status,
				data: { error_message, ...rest },
			} = e.response
			const err = { status, errorMessage: error_message || 'Failed to perform request, please try again.', ...rest }
			throw err
		} else {
			const errObject = e.toJSON()
			const err = { status: errObject.code, errorMessage: errObject.message, isNetworkError: true }
			throw err
		}
	}
}

// Default HTTP headers for JSON content.
const DEFAULT_HEADERS = {
	'Content-type': 'application/json',
}

// A class with a static method for making GET requests using a 
//specified URL and optional parameters and headers.
class Request {
	static get({ params = {}, url, headers = DEFAULT_HEADERS }) {
		return request({
			method: 'GET',
			url: BASE_URL + url,
			params,
			headers,
		})
	}
}

export default Request