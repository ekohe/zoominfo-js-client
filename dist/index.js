"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiRequest = function (url, params, token) {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token),
            },
            body: params ? JSON.stringify(params) : undefined,
        })
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            reject(new Error(response.statusText));
        })
            .then(function (data) {
            resolve(data);
        })
            .catch(function (error) {
            reject(error);
        });
    });
};
var ZoomInfoURLs = {
    baseURL: "https://api.zoominfo.com",
    search: {
        company: "/search/company",
        contact: "/search/contact",
    },
    enrich: {
        company: "/enrich/company",
        contact: "/enrich/contact",
    },
};
var ZoomInfoClient = function (props) {
    var handleBaseURL = props.handleBaseURL;
    var baseURL = handleBaseURL
        ? handleBaseURL(ZoomInfoURLs.baseURL)
        : ZoomInfoURLs.baseURL;
    var companySearch = function (params, token) {
        return apiRequest(baseURL + ZoomInfoURLs.search.company, params, token);
    };
    var contactSearch = function (params, token) {
        return apiRequest(baseURL + ZoomInfoURLs.search.contact, params, token);
    };
    var contactEnrich = function (params, token) {
        return apiRequest(baseURL + ZoomInfoURLs.enrich.contact, params, token);
    };
    return {
        companySearch: companySearch,
        contactSearch: contactSearch,
        contactEnrich: contactEnrich,
    };
};
exports.default = ZoomInfoClient;
