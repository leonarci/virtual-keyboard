import './textarea.scss';

export default function makeTextarea() {
  const element = document.createElement('textarea');
  element.classList.add('textarea');
  element.setAttribute('id', 'textarea');
  element.setAttribute('rows', '10');
  element.setAttribute('cols', '50');

  return element;
}
