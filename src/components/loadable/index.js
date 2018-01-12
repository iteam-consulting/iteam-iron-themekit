/**
 * A loadable is an element that can have a loading state.
 */
class Loadable {
  /**
   * 
   * @param {HTMLElement} element Html element for which we enable loading
   */
  constructor(element) {
    this._element = element;
    this._element._loadableInstance = this;
    this._element.style.position = 'relative';
    this._element.style.overflow = 'hidden';
    this._loader = null;

    // Save pointer events and cursor
    this._initialPointerEvents = this._element.style.pointerEvents;
    this._initialCursor = this._element.style.cursor;
  }

  /**
   * Start loading
   * @param {string} message Optional loading message to display
   */
  startLoading(message = '') {
    this._element.style.pointerEvents = 'none';
    this._element.style.cursor = 'default';

    // Create the loader
    this._loader = document.createElement('div');
    this._loader.classList.add('__iron-loader');
    this._loader.style.cursor = 'default';
    this._loader.style.bottom = 0;
    this._loader.style.left = 0;
    this._loader.style.position = 'absolute';
    this._loader.style.right = 0;
    this._loader.style.top = 0;
    this._loader.style.zIndex = 8000;

    // Add wrapper for the loader lines
    var wrapper = document.createElement('div');
    wrapper.classList.add('__iron-loader-wrapper');
    wrapper.style.left = '50%';
    wrapper.style.position = 'absolute';
    wrapper.style.top = '50%';
    wrapper.style.textAlign = 'center';
    wrapper.style.transform = 'translateX(-50%) translateY(-50%)';
    wrapper.style.zIndex = 8001;

    // Add all of the loader lines
    for (var i = 0; i < 4; i++) {
      var line = document.createElement('div');
      line.classList.add('__iron-loader-line');
      line.style.animation = 'expand 1s ease-in-out infinite';
      line.style.animationDelay = (i * 180) + 'ms';
      line.style.borderRadius = '1px';
      line.style.display = 'inline-block';
      line.style.height = '15px';
      line.style.margin = '0 3px';
      line.style.transformOrigin = 'center center';
      line.style.width = '2px';
      line.style.zIndex = 8002;
      wrapper.appendChild(line);
    }

    // Add the loader message
    if (message) {
      var text = document.createElement('div');
      text.classList.add('__iron-loader-message');
      text.style.fontSize = '14px';
      text.style.fontWeight = 'bold';
      text.style.margin = '5px 0 0';
      text.innerText = message;
      wrapper.appendChild(text);
    }

    // Add animation keyframes
    var style = document.createElement('style');
    style.innerText = '@keyframes expand { 0% {transform: scale(1);} 25% {transform: scale(2);}}';
    wrapper.appendChild(style);

    this._loader.appendChild(wrapper);
    this._element.appendChild(this._loader);
  }

  stopLoading() {
    this._element.removeChild(this._loader);
    this._element.style.pointerEvents = this._initialPointerEvents;
    this._element.style.cursor = this._initialCursor;
    this._loader = null;
  }
}

// Setup Loadables Function
export const setupLoadables = function() {
  const loadables = document.querySelectorAll('.loadable');
  loadables.forEach((element) => new Loadable(element));
};

export default Loadable;