/**
 * Created by jgarcia on 10/7/16.
 */

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

    let request = {
        url: url,
        method: method,
        data: data,
        dataType: 'json'
    };

    if (jsonp !== undefined) {
        request.dataType = 'jsonp';
        request.jsonp = jsonp;
    }

    return new Promise(function(resolve, reject) {
        return $.ajax(request).then(function(response) {
            if (crossDomain) {
                resolve(response);
            } else if (response.redirect !== undefined) {
                window.location = response.redirect;
            } else if(response.status === 200) {
                resolve(response);
            } else {
                reject(response);
            }
        }, function (error) {
            reject(error);
        });
    });

};

module.exports = api;

const api2 = function(url, method, data, jsonp) {
    let metas = document.getElementsByTagName('meta');
    let token;
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === 'csrf-token') {
            token = metas[i].getAttribute('content');
        }
    }

    let myHeaders = new Headers({
        "Content-Type": "application/json",
        "credentials": "same-origin",
        "X-CSRF-Token": token
    });

    let request = {
        headers: myHeaders,
        method: method,
        body: data,
    };


    fetch(url, request)
};