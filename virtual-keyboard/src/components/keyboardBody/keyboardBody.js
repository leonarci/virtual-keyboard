import './keyboardBody.scss'
export function makeKeyboardBody() {
    const element = document.createElement('div');
    element.classList.add('keyboard-body');
    element.setAttribute('id', 'keyboard-body');

    return element;
}