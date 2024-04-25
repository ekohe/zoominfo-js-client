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
			body: params ? JSON.stringify(params) : undefined,
		})
			.then((response) => {
				if (response.ok) {
					const jsonData = response.json()
					resolve(jsonData as R)
					return
				}
				reject(new Error(response.statusText))
			})
			.catch((error) => {
				reject(error)
			})
	})
}

const ZoomInfoURLs = {
	search: {
		company: "https://api.zoominfo.com/search/company",
		contact: "https://api.zoominfo.com/search/contact",
	},
	enrich: {
		company: "https://api.zoominfo.com/enrich/company",
		contact: "https://api.zoominfo.com/enrich/contact",
	},
}

const ZoomInfoClient = () => {
	const companySearch = (params: CompanySearchParams, token: string) => {
		return apiRequest<CompanySearchParams, CompanySearchResult>(
			ZoomInfoURLs.search.company,
			params,
			token,
		)
	}

	const contactSearch = (params: ContactSearchParams, token: string) => {
		return apiRequest<ContactSearchParams, ContactSearchResult>(
			ZoomInfoURLs.search.contact,
			params,
			token,
		)
	}

	const contactEnrich = (params: ContactEnrichParams, token: string) => {
		return apiRequest<ContactEnrichParams, ContactEnrichResult>(
			ZoomInfoURLs.enrich.contact,
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
