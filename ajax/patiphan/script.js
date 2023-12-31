/* const btn = document.querySelector('#request');
const bio = document.querySelector('#bio');

const request = new XMLHttpRequest();

request.onreadystatechange = () => {
  if (request.readyState === 4) {
    bio.style.border = '1px solid #e8e8e8';

    if (request.status === 200) {
      bio.innerHTML = request.responseText
    } else {
      bio.innerHTML = 'An error occurred during your request: ' + request.status + ' ' + request.statusText;
    }
  }
}

request.open('get', 'https://baconipsum.com/api/?type=meat-and-filler');

btn.addEventListener('click', () => {
  
  btn.style.display = 'none';

  request.send();
}) */

$(document).ready(function() {

  const $btn = $('#request');
  const $bio = $('#bio');

  function completeFn(responseText, textStatus, request) {
    $bio.css('border', '1px solid #e8e8e8');

    if (textStatus == 'error') {
      $bio.text('An error occurred during your request: ' + request.status + ' ' + request.statusText);
    }
  }

  $btn.on('click', function() {
    $($btn).hide();

    $bio.load('https://baconipsum.com/api/?type=meat-and-filler', completeFn);
  });
});