import './text.scss';

function makeHeader(innerText) {
  const element = document.createElement('h1');
  element.classList.add('header');
  element.innerText = innerText;

  return element;
}

function makeParagraph(innerText) {
  const element = document.createElement('p');
  element.classList.add('paragraph');
  element.innerText = innerText;

  return element;
}

export { makeHeader, makeParagraph };
