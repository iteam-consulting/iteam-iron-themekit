import './theme.scss';

window.onload = function() {
  var layout = document.querySelector('.layout');
  var menuToggle = document.getElementById('menutoggle');
  var nightToggle = document.getElementById('nighttoggle');

  // Setup the menu toggle
  menuToggle.addEventListener('click', function(e) {
    layout.classList.toggle('show-menu');
  });

  // Setup the night mode toggle
  nightToggle.addEventListener('click', function(e) {
    layout.classList.toggle('night');

    if (layout.classList.contains('night')) {
      nightToggle.innerHTML = 'brightness_3'
    } else {
      nightToggle.innerHTML = 'brightness_7';
    }
  });
  
};
