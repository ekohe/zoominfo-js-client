# ZoomInfo Client Library

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

## Usage

### Initialization

Import and initialize the client:

```javascript
import ZoomInfoClient from 'zoominfo-js-client';

const client = ZoomInfoClient({
  handleBaseURL: (baseURL) => `${baseURL}`
});
```

### Methods

#### `companySearch(params, token)`

Search for companies based on provided parameters.

- **Parameters:**
  - `params` (CompanySearchParams): Search criteria for companies.
  - `token` (string): The API token.
- **Returns:** Promise with search results.

```javascript
client.companySearch(searchParams, token)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

#### `contactSearch(params, token)`

Search for contacts based on provided parameters.

- **Parameters:**
  - `params` (ContactSearchParams): Search criteria for contacts.
  - `token` (string): The API token.
- **Returns:** Promise with search results.

```javascript
client.contactSearch(searchParams, token)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

#### `contactEnrich(params, token)`

Enrich contact information with additional details.

- **Parameters:**
  - `params` (ContactEnrichParams): Data to enrich a contact.
  - `token` (string): The API token.
- **Returns:** Promise with enriched contact data.

```javascript
client.contactEnrich(enrichParams, token)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

## Documentation

For detailed information on request and response formats, refer to the [types](./types.ts) file.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
