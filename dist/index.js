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
    search: {
        company: "https://api.zoominfo.com/search/company",
        contact: "https://api.zoominfo.com/search/contact",
    },
    enrich: {
        company: "https://api.zoominfo.com/enrich/company",
        contact: "https://api.zoominfo.com/enrich/contact",
    },
};
var ZoomInfoClient = function () {
    var companySearch = function (params, token) {
        return apiRequest(ZoomInfoURLs.search.company, params, token);
    };
    var contactSearch = function (params, token) {
        return apiRequest(ZoomInfoURLs.search.contact, params, token);
    };
    var contactEnrich = function (params, token) {
        return apiRequest(ZoomInfoURLs.enrich.contact, params, token);
    };
    return {
        companySearch: companySearch,
        contactSearch: contactSearch,
        contactEnrich: contactEnrich,
    };
};
exports.default = ZoomInfoClient;
