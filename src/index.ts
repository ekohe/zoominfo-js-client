import type {
	CompanySearchParams,
	CompanySearchResult,
	ContactEnrichParams,
	ContactEnrichResult,
	ContactSearchParams,
	ContactSearchResult,
} from "./types"

const apiRequest = <P, R>(url: string, params: P): Promise<R> => {
	return new Promise((resolve, reject) => {
		fetch(url, {
			method: "POST",
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

const useZoomInfo = () => {
	const companySearch = (params: CompanySearchParams) => {
		return apiRequest<CompanySearchParams, CompanySearchResult>(
			ZoomInfoURLs.search.company,
			params,
		)
	}

	const contactSearch = (params: ContactSearchParams) => {
		return apiRequest<ContactSearchParams, ContactSearchResult>(
			ZoomInfoURLs.search.contact,
			params,
		)
	}

	const contactEnrich = (params: ContactEnrichParams) => {
		return apiRequest<ContactEnrichParams, ContactEnrichResult>(
			ZoomInfoURLs.enrich.contact,
			params,
		)
	}

	return {
		companySearch,
		contactSearch,
		contactEnrich,
	}
}

export default useZoomInfo
