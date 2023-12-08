Client.js

// code omitted...
import config from "./config"
const axios = require("axios")  // 1


class FastAPIClient {
	constructor(overrides) {
		this.config = {
			...config,
			...overrides,
		}

		this.apiClient = this.getApiClient(this.config)  // 2
	}

	/* Create Axios client instance pointing at the REST api backend */
	getApiClient(config) {
		let initialConfig = {
			baseURL: `${config.apiBasePath}/api/v1`,  // 3
		}
		let client = axios.create(initialConfig)
		client.interceptors.request.use(localStorageTokenInterceptor)  // 4
		return client
	}

	getSampleRecipes(keyword) {
		return this.apiClient.get(`/recipes/search/?keyword=${keyword}&max_results=10`).then(({data}) => {  // 5
			return data
		})
	}
}