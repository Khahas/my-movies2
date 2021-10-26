const baseURL = 'https://api.themoviedb.org/3/movie/580489/credits?api_key='

/**
 * Get a random dog image
 *
 * @returns Promise
 */
export const getMovies = async () => {
	const response = await fetch(baseURL + 'd60745d296221c0d52b06d66535af069')

	if (!response.ok) {
		throw new Error("API responded that it was not feeling so good.")
	}

	return response.json()
}

export default {
	getMovies,
}