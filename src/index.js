import './theme.scss';
import setupCards from './components/cards';
import {setupLoadables} from './components/loadable';

var layout = document.querySelector('.layout');

setupCards();
setupLoadables();

// Steps to take when the window loads
window.onload = function() {
  // Setup the menu toggle
  document.getElementById('menutoggle').addEventListener('click', function(e) {
    layout.classList.toggle('show-menu');
  });
};

// Handle scrolling event
var position = 0;
var scrollingDown = true;
function scrollChange() {
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