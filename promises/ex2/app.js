const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
})

// call .then() after all of promise are run.
/* Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {
  console.log(message);
}) */

// call .then() as soon as first 1 has finished
Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {
  console.log(message);
})