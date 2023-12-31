let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

p.then((message) => { // resolve('Success')
  console.log('This is in the then ' + message);
}).catch(((message) => { // reject('Failed')
  console.log('This in the catch ' + message);
}))