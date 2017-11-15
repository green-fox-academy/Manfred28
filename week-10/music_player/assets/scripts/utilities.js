'use strict';

const utilities = function() {
    const ajaxCall = function(Config) {
        return new Promise(function(resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open(Config.method, Config.url);
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else if (xhr.readyState === 4 && xhr.status !== 200) {
                    reject(xhr.statusText);
                }
            } 
            xhr.send(JSON.stringify(Config.body));
        })
    }

    const convertSecondsToMMSSFormat = function(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return minutes + ':' + seconds
    }

    const toggleActiveElementByIndex = function($domElements, toActiveIndex) {
        $domElements.forEach(function($element, index) {
            $element.classList.remove('active')
            if (index === toActiveIndex) {
                $element.classList.add('active')
            }    
        })
    }

    const toggleActiveElementOnClick = function($domElements, elementToActivate) {
        $domElements.forEach(function($element, i) {
            $element.classList.remove('active')
        })
        elementToActivate.classList.add('active')
    }

    const createDialog = function($parent, onActionCallback) {
        const $container = document.createElement('section');
        $container.classList.add('dialog');
        $container.innerHTML = `
            <input type="text">
            <button>Submit</button>`
        $container.querySelector('button').addEventListener('click', 
            function() {
                onActionCallback($container.querySelector('input').value)
                $container.remove();
            }
        );
        $parent.appendChild($container);
    }

    return {
        ajaxCall,
        secondsToMMSS: convertSecondsToMMSSFormat,
        toggleActiveElementByIndex,
        toggleActiveElementOnClick,
        createDialog
    }
}