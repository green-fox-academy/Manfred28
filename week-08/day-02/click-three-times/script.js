// Create a simple HTML document with one button.

// If the user clicks the button 3 times, 
// and 5 seconds is already ellapsed since the page is loaded, 
// a text should apper under the button:

// 5 seconds ellapsed and clicked 3 times

// If the user starts clicking before the first 5 seconds, nothing should be printed
'use strict';

const $button = document.querySelector('button');
const siteLoadedAt = Date.now();
// const text = document.createTextNode('5 seconds ellapsed and clicked 3 times');


const clickFunction = function() {
    let counter = 0;
    const child = document.createElement('div');
    child.textContent = '5 seconds ellapsed and clicked 3 times';
    return function() {
        counter++
        if (Date.now() - siteLoadedAt > 5000 && counter >= 3) {
            document.querySelector('body').appendChild(child)
        }
    }
}

$button.addEventListener('click', clickFunction())

