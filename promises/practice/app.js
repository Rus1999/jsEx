const getNumber = () => {
  return new Promise((resolve, reject) => {
    resolve(6);
    reject('We\'re close');
  })
}

const getRomanNumber = (number) => {
  return new Promise((resolve, reject) => {
    switch(number){
      case 1:
        resolve('I');
        break;
      case 2:
        resolve('II');
        break;
      case 3:
        resolve('III');
        break;
      case 4:
        resolve('IV');
        break;
      case 5:
        resolve('V');
        break;
      case 6:
        resolve('VI');
        break;
      case 7:
        resolve('VII');
        break;
      default:
        reject('Number > 7 is not acceptable.');
        break;
    }
  })
}

const onSuccess = (value) => console.log(`Success: ${value}`);
const onError   = (error) => console.log(`Error: ${error}`);
const onFinally = () => console.log(`Finally`);

getNumber()
  .then(getRomanNumber)
  .then(onSuccess)
  .catch(onError) // global error handler
  .finally(onFinally); 