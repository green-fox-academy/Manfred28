'use strict';

const rectangle = document.getElementById("very_rectangle")
setAttributes(rectangle, {"x": "50", "y": "50"})
console.log(rectangle)
rectangle.style.fill = "tomato"


function setAttributes(elem, properties) {
    for (let prop in properties) {
        elem.setAttribute(prop, properties[prop])
    }
}