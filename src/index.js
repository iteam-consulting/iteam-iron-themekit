import './theme.scss';

var layout = document.querySelector('.layout');
var menuToggle = document.getElementById('menutoggle');

// Handle scrolling event
var position = 0;
var scrollingUp = false;
var scrollChange = function() {
  if (scrollingUp) {
    layout.classList.add('scrolling-up');
  } else {
    layout.classList.remove('scrolling-up');
  }
}
window.onscroll = function() {
  var newVal = position <= window.scrollY;
  if (scrollingUp !== newVal) {
    scrollChange();
  }
  scrollingUp = newVal;
  position = window.scrollY;
}

// Steps to take when the window loads
window.onload = function() {
  // Setup the menu toggle
  menuToggle.addEventListener('click', function(e) {
    layout.classList.toggle('show-menu');
  });
};