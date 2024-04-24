type PlainObjectType = {
	[index: string]: unknown
}

interface SearchResult<T> {
	maxResults: number
	totalResults: number
	currentPage: number
	data: T[]
}

/* See https://api-docs.zoominfo.com/#4506f0ad-9147-4016-991f-ce8ef6700f07 */
export interface CompanySearchParams {
	rpp?: number
	page?: number
	sortOrder?: "asc" | "desc"
	sortBy?: "name" | "employeeCount" | "revenue"
	companyId?: string
	companyName?: string
	companyWebsite?: string
	companyDescription?: string
	parentId?: string
	ultimateParentId?: string
}

export interface CompanySearchResultItem {
	id: number
	name: string
}

export type CompanySearchResult = SearchResult<CompanySearchResultItem>

/* See https://api-docs.zoominfo.com/#2e5121fd-df42-41a4-95d6-0e8f24eebd92 */
export interface ContactSearchParams {
	rpp?: number
	page?: number
	sortOrder?: "asc" | "desc"
	sortBy?:
		| "contactAccuracyScore"
		| "lastName"
		| "companyName"
		| "hierarchy"
		| "sourceCount"
		| "lastMentioned"
		| "relevance"
	/* Unique ZoomInfo identifier for the contact. Can include a comma-separated list. */
	personId?: string
	emailAddress?: string
	supplementalEmail?: string[]
	hashedEmail?: string
	phone?: string[]
}

interface ContactSearchResultItem {
	id: number
	firstName: string
	middleName: string
	lastName: string
	validDate: string
	lastUpdatedDate: string
	jobTitle: string
	contactAccuracyScore: number
	hasEmail: boolean
	hasSupplementalEmail: boolean
	hasDirectPhone: boolean
	hasMobilePhone: boolean
	hasCompanyIndustry: boolean
	hasCompanyPhone: boolean
	hasCompanyStreet: boolean
	hasCompanyState: boolean
	hasCompanyZipCode: boolean
	hasCompanyCountry: boolean
	hasCompanyRevenue: boolean
	hasCompanyEmployeeCount: boolean
	company: CompanySearchResultItem
}

export type ContactSearchResult = SearchResult<ContactSearchResultItem>

export interface ContactEnrichParams {
	personId?: number | string
	fullName?: string
	firstName?: string
	lastName?: string
	emailAddress?: string
	phone?: string
	jobTitle?: string
	hashedEmail?: string
	externalURL?: string
	lastUpdatedDateAfter?: string
	validDateAfter?: string
	companyId?: number | string
	companyName?: string
	contactAccuracyScoreMin?: number
}

export interface ContactEnrichResult extends PlainObjectType {
	id: number
	firstname: string
	middleName: string
	lastName: string
	email: string
}
