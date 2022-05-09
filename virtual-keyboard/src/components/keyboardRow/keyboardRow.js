import './keyboardRow.scss';

export default class KeyboardRow {
  constructor() {
    this.tag = 'div';
    this.class = 'keyboard-row';
  }

  create(id) {
    const keyboardRow = document.createElement(this.tag);
    keyboardRow.classList.add(this.class);
    keyboardRow.setAttribute('id', id);
    return keyboardRow;
  }
}
