import './theme.scss';

var storage = window.localStorage;
var layout = document.querySelector('.layout');
var layoutChangers = document.getElementsByClassName('layoutChanger');
var menuToggle = document.getElementById('menutoggle');
var nightToggle = document.getElementById('nighttoggle');

var updateNightModeClasses = function(e) {
  var night;
  if (e) {
    e.preventDefault();
    night = !(layout.classList.contains('night'));
    storage.setItem('night', night);
  } else {
    night = storage.getItem('night') === 'true';
  }

  if (night) {
    layout.classList.add('night');
    nightToggle.innerHTML = 'brightness_3'
  } else {
    layout.classList.remove('night');
    nightToggle.innerHTML = 'brightness_7';
  }
}

var updateLayout = function(e) {
  var initialLayout;
  if (e) {
    e.preventDefault();
    initialLayout = e.target.text;
    storage.setItem('initialLayout', initialLayout);
  } else {
    initialLayout = storage.getItem('initialLayout');
  }

  layout.classList.remove('split-header', 'sidebar');
  switch (initialLayout) {
    case 'Split Header':
      layout.classList.add('split-header');
      break;
    case 'Sidebar':
      layout.classList.add('sidebar');
      break;
    default:
      break;
  }
}

window.onload = function() {
  // Get initial layout
  updateLayout();
  
  // Get current mode
  updateNightModeClasses();

  // Setup the menu toggle
  menuToggle.addEventListener('click', function(e) {
    layout.classList.toggle('show-menu');
  });

  // Setup the night mode toggle
  nightToggle.addEventListener('click', updateNightModeClasses);

  // Setup layout changing anchors
  for (var i = 0; i < layoutChangers.length; i++) {
    layoutChangers[i].addEventListener('click', updateLayout);
  }
};
