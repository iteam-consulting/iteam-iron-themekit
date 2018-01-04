var storage = window.localStorage;
var layout = document.querySelector('.layout');
var layoutChangers = document.getElementsByClassName('layoutChanger');
var nightToggle = document.getElementById('nighttoggle');
var toggles = {
  ['fixed-header']: document.getElementById('fixedHeaderToggle'),
  ['left-nav']: document.getElementById('splitHeaderToggle'),
}

var updateNightModeClasses = function (e) {
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

var updateLayout = function (e) {
  var initialLayout;
  if (e) {
    e.preventDefault();
    initialLayout = e.target.text;
    storage.setItem('initialLayout', initialLayout);
  } else {
    initialLayout = storage.getItem('initialLayout');
  }

  layout.classList.remove('split-header', 'sidebar', 'show-menu');
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

function updatedCheckbox(className) {
  return function(event) {
    // Set/Get value in/from storage
    var initial;
    if (event) {
      event.preventDefault();
      initial = event.target.checked;
      storage.setItem(className, initial);
    } else {
      initial = storage.getItem(className) === 'true';
    }

    // Update layout
    if (initial) {
      layout.classList.add(className);
    } else {
      layout.classList.remove(className);
    }

    // Update checkbox
    var elem = toggles[className];
    if (elem) {
      elem.checked = initial;
    }
  }
}

updateLayout();
updateNightModeClasses();
updatedCheckbox('fixed-header')();
updatedCheckbox('left-nav')();

nightToggle.addEventListener('click', updateNightModeClasses);
toggles['fixed-header'].addEventListener('change', updatedCheckbox('fixed-header'));
toggles['left-nav'].addEventListener('change', updatedCheckbox('left-nav'));
for (var i = 0; i < layoutChangers.length; i++) {
  layoutChangers[i].addEventListener('click', updateLayout);
}