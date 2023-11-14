const getWeather = () => {
  return new Promise((resolve, reject) => {
    reject('Please check your internet connection');
    resolve('Sunny');
  })
}

const onSuccess = data => console.log(`😍 Success ${data}`);
const onError = error => console.log(`🤢 Error ${error}`);
const finallyFn = () => console.log(`🌹 Data from Punyarit Klaphachon 🌹`);

// 1st param = resolve = onSuccess
// 2nd param = reject = onError
getWeather().then(onSuccess, onError).finally(finallyFn());
