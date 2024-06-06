import type {
	CompanySearchParams,
	CompanySearchResult,
	ContactEnrichParams,
	ContactEnrichResult,
	ContactSearchParams,
	ContactSearchResult,
} from "./types"

const apiRequest = <P, R>(
	url: string,
	params: P,
	token: string,
): Promise<R> => {
	return new Promise((resolve, reject) => {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			mode: "cors",
			body: params ? JSON.stringify(params) : undefined,
		})
			.then((response) => {
				if (response.ok) {
					return response.json()
				}
				reject(new Error(response.statusText))
			})
			.then((data) => {
				resolve(data as R)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

const ZoomInfoURLs = {
	baseURL: "https://api.zoominfo.com",
	search: {
		company: "/search/company",
		contact: "/search/contact",
	},
	enrich: {
		company: "/enrich/company",
		contact: "/enrich/contact",
	},
}

const ZoomInfoClient = (props: {
	handleBaseURL?: (baseURL: string) => string
}) => {
	const { handleBaseURL } = props

	const baseURL = handleBaseURL
		? handleBaseURL(ZoomInfoURLs.baseURL)
		: ZoomInfoURLs.baseURL

	const companySearch = (params: CompanySearchParams, token: string) => {
		return apiRequest<CompanySearchParams, CompanySearchResult>(
			baseURL + ZoomInfoURLs.search.company,
			params,
			token,
		)
	}

	const contactSearch = (params: ContactSearchParams, token: string) => {
		return apiRequest<ContactSearchParams, ContactSearchResult>(
			baseURL + ZoomInfoURLs.search.contact,
			params,
			token,
		)
	}

	const contactEnrich = (params: ContactEnrichParams, token: string) => {
		return apiRequest<ContactEnrichParams, ContactEnrichResult>(
			baseURL + ZoomInfoURLs.enrich.contact,
			params,
			token,
		)
	}

	return {
		companySearch,
		contactSearch,
		contactEnrich,
	}
}

export default ZoomInfoClient
