# ZoomInfo Client - JS Library

The ZoomInfo Client Library is a TypeScript/JavaScript library for interacting with the ZoomInfo API. This library facilitates operations for searching companies and contacts, as well as enriching contact information.

## Features

- **Company Search**: Search for companies using various parameters.
- **Contact Search**: Search for contacts based on specific criteria.
- **Contact Enrichment**: Enrich contact information with additional details.

## Installation

To add the ZoomInfo Client Library to your project, run:

```bash
yarn add https://github.com/ekohe/zoominfo-js-client
```

or using npm:

```bash
npm install https://github.com/ekohe/zoominfo-js-client
```

## Usage

### Initialization

Import and initialize the client:

```typescript
import ZoomInfoClient from "zoominfo-js-client";

const client = ZoomInfoClient({
  handleBaseURL: (baseURL) => `${baseURL}`, // Optional: customize the base URL
});
```

By default, the client uses `https://api.zoominfo.com` as the base URL. You can customize this using the `handleBaseURL` function.

### Methods

#### `companySearch(params, token)`

Search for companies based on provided parameters.

- **Parameters:**
  - `params` (CompanySearchParams): Search criteria for companies.
  - `token` (string): The API token.
- **Returns:** Promise with search results.

```typescript
const searchParams = {
  companyName: "Example Corp",
  rpp: 10, // results per page
  page: 1,
};

client
  .companySearch(searchParams, token)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

#### `contactSearch(params, token)`

Search for contacts based on provided parameters.

- **Parameters:**
  - `params` (ContactSearchParams): Search criteria for contacts.
  - `token` (string): The API token.
- **Returns:** Promise with search results.

```typescript
const searchParams = {
  companyName: "Example Corp",
  jobTitle: "Software Engineer",
  rpp: 10,
  page: 1,
};

client
  .contactSearch(searchParams, token)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

#### `contactEnrich(params, token)`

Enrich contact information with additional details.

- **Parameters:**
  - `params` (ContactEnrichParams): Data to enrich a contact.
  - `token` (string): The API token.
- **Returns:** Promise with enriched contact data.

```typescript
const enrichParams = {
  matchPersonInput: [
    {
      emailAddress: "example@company.com",
    },
  ],
  outputFields: ["id", "firstName", "lastName", "email"],
};

client
  .contactEnrich(enrichParams, token)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

## Available Parameters

### Company Search Parameters

```typescript
interface CompanySearchParams {
  rpp?: number; // Results per page
  page?: number; // Page number
  sortOrder?: "asc" | "desc"; // Sort order
  sortBy?: "name" | "employeeCount" | "revenue"; // Sort field
  companyId?: string; // ZoomInfo company ID
  companyName?: string; // Company name
  companyWebsite?: string; // Company website
  companyDescription?: string; // Company description
  parentId?: string; // Parent company ID
  ultimateParentId?: string; // Ultimate parent company ID
}
```

### Contact Search Parameters

```typescript
interface ContactSearchParams {
  rpp?: number; // Results per page
  page?: number; // Page number
  sortOrder?: "asc" | "desc"; // Sort order
  sortBy?:
    | "contactAccuracyScore"
    | "lastName"
    | "companyName"
    | "hierarchy"
    | "sourceCount"
    | "lastMentioned"
    | "relevance"; // Sort field
  personId?: string; // ZoomInfo person ID (can be comma-separated)
  emailAddress?: string; // Email address
  supplementalEmail?: string[]; // Supplemental emails
  hashedEmail?: string; // Hashed email
  phone?: string[]; // Phone numbers
  companyId?: string; // ZoomInfo company ID
  companyName?: string; // Company name
  managementLevel?: string; // Management level
  fullName?: string; // Full name
  jobTitle?: string; // Job title
}
```

### Contact Enrich Parameters

```typescript
interface ContactEnrichParams {
  matchPersonInput: Array<{
    // Array of contact inputs to match
    personId?: number | string; // ZoomInfo person ID
    fullName?: string; // Full name
    firstName?: string; // First name
    lastName?: string; // Last name
    emailAddress?: string; // Email address
    phone?: string; // Phone number
    jobTitle?: string; // Job title
    hashedEmail?: string; // Hashed email
    externalURL?: string; // External URL
    lastUpdatedDateAfter?: string; // Last updated date (after)
    validDateAfter?: string; // Valid date (after)
    companyId?: number | string; // ZoomInfo company ID
    companyName?: string; // Company name
    contactAccuracyScoreMin?: number; // Minimum contact accuracy score
  }>;
  outputFields: string[]; // Fields to include in the response
}
```

## Documentation

For detailed information on request and response formats, refer to the [types](./src/types.ts) file and the [ZoomInfo API documentation](https://api-docs.zoominfo.com/).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
