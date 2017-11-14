'use strict';

const ajaxHelper = function() {
    const ajaxCall = function(Config) {
        return new Promise(function(resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open(Config.method, Config.url);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else if (xhr.readyState === 4 && xhr.status !== 200) {
                    reject(xhr.statusText);
                }
            } 
            xhr.send();
        })
    }

    return {
        ajaxCall
    }
}