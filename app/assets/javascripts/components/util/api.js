/**
 * Created by jgarcia on 10/7/16.
 */

/**
 *
 * @param url
 * @param method
 * @param data
 * @returns {Promise}
 */
const api = function(url, method, data) {
    'use strict';

    method = method === undefined ? 'POST' : method;

    if (url.indexOf('/') !== 0) {
        url = '/'+url;
    }

    return new Promise(function(resolve, reject) {
        return $.ajax({
            url: url,
            method: method,
            data: data,
            dataType: 'json'
        }).then(function(response) {
            if (response.redirect !== undefined) {
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