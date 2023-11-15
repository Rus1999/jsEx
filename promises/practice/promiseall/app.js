const promise1 = new Promise((resolve, reject) => resolve(7));
// const promise2 = new Promise((resolve, reject) => reject(-1));
const promise2 = new Promise((resolve, reject) => resolve(1));
const promise3 = new Promise((resolve, reject) => resolve(9));

const onError = error => console.log(`Error code: ${error}`);

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values)).catch(onError);