import './textarea.scss';

export default function makeTextarea() {
  const element = document.createElement('textarea');
  element.classList.add('textarea');
  element.setAttribute('id', 'textarea');
  // element.setAttribute('readonly', 'readonly');
  element.setAttribute('rows', '5');
  element.setAttribute('cols', '50');

  return element;
}
