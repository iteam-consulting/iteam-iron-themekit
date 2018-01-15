/**
 * 
 */
class Dialog {
  constructor(element) {
    this._element = element;
    this._element._dialogInstance = this;
    this._element.style.display = 'none';
    this._wrapper = null;
  }

  open() {
    this._wrapper = document.createElement('div');
    this._wrapper.classList.add('__iron-dialog-wrapper');
    this._wrapper.style.bottom = 0;
    this._wrapper.style.left = 0;
    this._wrapper.style.position = 'fixed';
    this._wrapper.style.right = 0;
    this._wrapper.style.top = 0;
    this._wrapper.style.zIndex = 11000;
    this._wrapper.addEventListener('click', function(e) {
      if (e.target === this._wrapper) {
        this.close();
      }
    }.bind(this));

    var dialog = document.createElement('div');
    dialog.classList.add('__iron-dialog');
    dialog.innerHTML = this._element.innerHTML;
    dialog.style.borderRadius = '3px';
    dialog.style.boxShadow = '0px 0px 5px 0px rgba(0,0,0,0.4)';
    dialog.style.left = '50%';
    dialog.style.position = 'absolute';
    dialog.style.top = '50%';
    dialog.style.transform = 'translateX(-50%) translateY(-50%)';

    this._wrapper.appendChild(dialog);
    document.body.appendChild(this._wrapper);
  }

  close() {
    document.body.removeChild(this._wrapper);
    this._wrapper = null;
  }
}

// Setup Dialogs Functions
export const setupDialogs = function() {
  const dialogs = document.querySelectorAll('.dialog');
  dialogs.forEach((element) => new Dialog(element));
};

export default Dialog;