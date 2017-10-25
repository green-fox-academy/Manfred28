'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
var boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
var order = [];

order = girls.reduce((pairs, girl, i) => {
    pairs.push(girl);
    pairs.push(boys[i]);
    return pairs
}, [])

console.log(order); // misses the last boy due to the being more boys

const order2 = boys.reduce((pairs, boy, i) => {
    if (girls[i]) {
        pairs.push(girls[i]);
    }
    pairs.push(boy);
    return pairs
}, [])

console.log(order2) // includes all boys and girls - but not all girls if there are more of them
