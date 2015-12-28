console.log('hello there!');
// var $ = require('./node_modules/jquery-ui/jquery-ui.js');

var article = document.getElementsByName('article');

$('article').hover(function() {
  $(this).toggleClass('hide show', 1000, "easeOutSine");
});

$('article p').hover(function() {
  $(this).toggleClass('hide show', 1000, "easeOutSine");
});
$('article a').hover(function() {
  $(this).toggleClass('hide show', 1000, "easeOutSine");
});

$('article').click(function() {
  $(this).toggleClass('hide show', 1000, "easeOutSine");
});

$('article p').click(function() {
  $(this).toggleClass('hide show', 1000, "easeOutSine");
});
$('article a').click(function() {
  $(this).toggleClass('hide show', 1000, "easeOutSine");
});

$('button').click(function() {
  $(this).siblings('div').slideToggle();
});
