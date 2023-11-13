'use strict';

const myArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const myArrayReversed = myArray.reverse();

// mutiply every element in the array with 7
const myArrayMapped = myArrayReversed.map((x) => x * 7);

console.log(myArrayMapped);