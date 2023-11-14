/* const print = function (callback) {
  callback();
}

// function with name
const message = function () {
  console.log("This message is shown by message function after 3 seconds.");
}

setTimeout(message, 3000);

// anonymouse function
setTimeout(function(){
  console.log("This message is shown by anonymouse function after 3 seconds.");
}, 3000);


// anonymouse function with arrow function
setTimeout(() => {
  console.log("This message is shown by anonymouse arrow function after 3 seconds.");
}, 3000); */

let callbackBtn = document.querySelector('#callback-btn');

callbackBtn.addEventListener('click', function () {
  console.log('user has clicked on the button!');
});
