// all of function below are work with the same functionality.

function sum1(a, b) {
  return a + b;
}

const sum2 = (a, b) => {
  return a + b;
};

// without { } it will assume that it is return a + b.
const sum3 = (a, b) => a + b;

console.log(`regular function: 4+7 = ${sum1(4, 3)}`);
console.log(`arrow function  : 4+7 = ${sum2(4, 3)}`);
console.log(`arrow functino2 : 4+7 = ${sum3(4, 3)}`);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// if number is positive then it will return true statement.
function isPositive1(number) {
  return number >= 0;
}

// with one parameter it doesn't require parentheses.
const isPositive2 = number => number >= 0

console.log(`regular function:  7 is ${isPositive1(7) ? 'positive number' : 'negative number'}.`);
console.log(`arrow function  : -7 is ${isPositive2(-7) ? 'positive number' : 'negative number'}.`);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

function randomNumbe1() {
  return Math.random;
}

// with non parameter it's require empty parentheses.
const randomNumber2 = () => Math.random;

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('Click', function() {
  console.log('Click');
});

// anonymous arrow function
document.addEventListener('Click', () => console.log('Click'));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

