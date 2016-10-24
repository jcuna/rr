/**
 * Created by jgarcia on 10/7/16.
 */
window.fetchJsonp = require('fetch-jsonp');
/**
 *
 * @param url
 * @param method
 * @param data
 * @param jsonp
 * @returns {Promise}
 */
const api = function(url, method, data, jsonp) {
    'use strict';

    let crossDomain = url.indexOf('http') === 0;
    method = method === undefined ? 'POST' : method;

    if (url.indexOf('/') !== 0 && !crossDomain) {
        url = '/'+url;
    }

    if (jsonp !== undefined && jsonp) {
        return jsonpFetch(url, method, data, crossDomain);
    } else {
       return normalFetch(url, method, data, crossDomain);
    }
};

/**
 *
 * @param url
 * @param method
 * @param data
 * @param crossDomain
 * @returns {Promise}
 */
const normalFetch = function(url, method, data, crossDomain) {
    'use strict';

    const metas = document.getElementsByTagName('meta');
    let token;
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === 'csrf-token') {
            token = metas[i].getAttribute('content');
        }
    }

    const requestHeaders = new Headers({
        "Content-Type": "application/json",
        "X-CSRF-Token": token
    });

    const request = {
        headers: requestHeaders,
        credentials: "same-origin",
        method: method,
        body: JSON.stringify(data),
    };

    return new Promise(function(resolve, reject) {
        return fetch(url, request).then(response => {
            const contentType = response.headers.get("content-type");
            if(contentType && contentType.indexOf("application/json") !== -1) {
                return response.json().then(data => {
                    if (data.redirect !== undefined) {
                        window.location = data.redirect;
                    } else if(data.status === 200 || crossDomain) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                }, (error) => {
                    reject(error);
                });
            }
        }, (error) => {
            reject(error);
        });
    });
};

const jsonpFetch = function (url, method, data, crossDomain) {

};

module.exports = api;
