import './wrapper.scss'
export function makeWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    return wrapper;
}