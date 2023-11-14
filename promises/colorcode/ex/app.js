const getWeather = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Sunny');
      reject('Check your internet connection');
    }, 100)
  })
}

const getWeatherIcon = (weather) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch(weather){
        case 'Sunny':
          resolve('🌞');
          break
        case 'Cloudy':
          resolve('☁️');
          break
        case 'Rainy':
          resolve('☔');
          break
        default:
          reject('No icon found');
      }
    }, 100)
  })
}

const onSuccess = data  => console.log(`😍 Success ${data}`);
const onError   = error => console.log(`🤢 Error ${error}`);
const finallyFn = ()    => console.log(`🌹 Data from Punyarit Klaphachon 🌹`);

// 1st param = resolve = onSuccess
// 2nd param = reject = onError
getWeather()
  // getWeatherIcon(resolve of getWeather())
  .then(getWeatherIcon) // the data of resolve go to the parameter of next function
  .then(onSuccess, onError) // reject(error) of any promise will be display
  .catch(onError)
  .finally(finallyFn);
