import './theme.scss';

window.onload = function() {
  // Setup the menu toggle
  document.getElementById('menutoggle').addEventListener('click', function(e) {
    document.querySelector('.layout').classList.toggle('show-menu');
  });
};
