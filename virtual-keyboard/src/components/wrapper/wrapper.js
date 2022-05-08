import './wrapper.scss';

export default function makeWrapper() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  return wrapper;
}
