'use strict';
// - Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

const r = [54, 23, 66, 22];

const sumTwoElementsOfArray = array => index1 => index2 => array[index1] + array[index2] ;
const sumOfR = sumTwoElementsOfArray(r);

console.log(sumOfR(0)(2));