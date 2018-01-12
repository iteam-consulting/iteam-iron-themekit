export default function() {
  var cards = document.getElementsByClassName('card');
  for (var i = 0; i < cards.length; i++) {
    var img = cards[i].getElementsByTagName('img');
    if (img.length > 0) {
      // Create new element
      var newImg = document.createElement('div');
      newImg.classList.add('img');

      // Get src and add it to the new element
      var src = img[0].getAttribute('src');
      var background = 'url('+src+') center center/cover no-repeat';
      newImg.style.background = background;

      // Replace the old with the new
      var parent = img[0].parentNode;
      parent.replaceChild(newImg, img[0]);
    }
  }
};
