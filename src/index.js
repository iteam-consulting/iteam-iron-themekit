import './theme.scss';
import setupCards from './components/cards';

var layout = document.querySelector('.layout');
var menuToggle = document.getElementById('menutoggle');

// Handle scrolling event
var position = 0;
var scrollingDown = true;
var scrollChange = function() {
  if (scrollingDown) {
    layout.classList.add('scrolling-down');
  } else {
    layout.classList.remove('scrolling-down');
  }
}
window.onscroll = function() {
  var newVal = position > window.scrollY;
  if (scrollingDown !== newVal) {
    scrollChange();
  }
  scrollingDown = newVal;
  position = window.scrollY;
}

// Setup cards
setupCards();

// Steps to take when the window loads
window.onload = function() {
  // Setup the menu toggle
  menuToggle.addEventListener('click', function(e) {
    layout.classList.toggle('show-menu');
  });

};