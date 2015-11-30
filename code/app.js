console.log('hello there!');

var ypos;
var image;
var image1;

// function parallax () {
//   ypos = window.pageYOffset;
//   image = document.getElementById('parallax');
//   image1 = document.getElementById('parallax1');
//
//   image.style.top = ypos * .4 + 'px'; //setting the top: property of bg image to be 40% of the normal scroll rate
//   image1.style.top = ypos * .4 + 'px';
// }
//
// window.addEventListener('scroll', parallax);


var article = document.getElementsByName('article');

$('article').hover(function() {
  $(this).toggleClass('hide show');
});

$('article p').hover(function() {
  $(this).toggleClass('hide show');
});

$('article').click(function() {
  $(this).toggleClass('hide show');
});

$('article p').click(function() {
  $(this).toggleClass('hide show');
});
