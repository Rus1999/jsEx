// $ most likely are jQuery statement
/* 
  $('css-selector');
  this will return jquery object with contain jquery method
 */


$(document).ready(function() {
  // alert('jquery loaded');
  // console.log(document.getElementById('main-content'));
  // console.log($('#main-content'));

  // animation
  const logoEl = $('#logo');

  console.log('Upwrapped element:');
  console.log(logoEl[0]);

  logoEl.css({
    display: 'inline',
    position: 'relative'
  })

  logoEl.animate({
    left: 190
  })

  document.getElementsByTagName('title').innerText = 'wowowow';
});