'use strict';

const utilities = function() {
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

    const convertSecondsToMMSSFormat = function(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return minutes + ':' + seconds
    }

    return {
        ajaxCall,
        secondsToMMSS: convertSecondsToMMSSFormat
    }
}