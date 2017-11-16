'use strict';

const utilities = function() {
    const AjaxCalls = ajaxCalls(); 
    const Dialog = dialog();

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

    return {
        AjaxCalls,
        Dialog,
        secondsToMMSS: convertSecondsToMMSSFormat,
        toggleActiveElementByIndex,
        toggleActiveElementOnClick,
    }
}