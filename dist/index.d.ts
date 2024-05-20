import type { CompanySearchParams, CompanySearchResult, ContactEnrichParams, ContactEnrichResult, ContactSearchParams, ContactSearchResult } from "./types";
declare const ZoomInfoClient: () => {
    companySearch: (params: CompanySearchParams, token: string) => Promise<CompanySearchResult>;
    contactSearch: (params: ContactSearchParams, token: string) => Promise<ContactSearchResult>;
    contactEnrich: (params: ContactEnrichParams, token: string) => Promise<ContactEnrichResult>;
};
export default ZoomInfoClient;
