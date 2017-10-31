'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
  console.log(num);
}

const selectLastEvenNumber = function(array, callback) {
    let evenNums = array.filter((num) => num % 2 === 0)
    callback(evenNums[evenNums.length - 1]);
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8