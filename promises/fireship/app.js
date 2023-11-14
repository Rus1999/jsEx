// create
// (myResolve, myReject) => executor => resolves a value(success) or rejects(error)
const myPromise = () => {
    return new Promise(function(resolve, reject) {
    // producing code (may take some time)

    const isSuccess = 1;

    if (isSuccess) {
      resolve('😊 Success naja. '); // when run this function mean that the promise has been success; can send the value via parement
    } else {
      reject('😢 Fail jaa.');  // when run this function mean that the promise has failed
    }

    // return of promise (state)
    // 1. pending (when promise does not resolve or reject)
    // 2. resolve (when promise is resolved)
    // 3. reject  (when promise is reject)
  });
}

// promise usage
// 'consuming code' (mus wait for a fulfilled promise)
myPromise()
  .then( // (resolve, reject)
    (value) => { console.log(`First parameter: ${value}`) },
    (value) => { console.log(`Second parameter: ${value}`)}
  )
  .catch( // catch error
    (error) => { console.log(`Error message: ${error}`) }
  )
  .finally( // both posibility
    console.log("Run no matter what")
  )

