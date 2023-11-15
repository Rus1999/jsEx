const promise1 = () => {
  return new Promise((resolve, reject) => {
    resolve(console.log('Hello promise'));
  })
}

promise1()
  .then((value => {
    console.log(value);
  }));