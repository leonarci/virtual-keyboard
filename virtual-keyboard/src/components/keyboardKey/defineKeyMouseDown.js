import changeTextareaValue from '../textarea/changeTextareaValue';
import { lang } from './keyboardKey';

function simulateClickOnShift(shift) {
  const shiftChild = shift.children[0].children[0];
  const event = new MouseEvent('mousedown', {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  shiftChild.dispatchEvent(event);
}

export default function defineKeyMouseDown(event) {
  const key = event.target.parentNode.parentNode;
  if (key.classList[0] === 'key') {
    if (key.classList[1] === 'MetaLeft'
    || key.classList[1] === 'ControlRight'
    || key.classList[1] === 'AltRight') return;
    if (key.classList[1] === 'ControlLeft') {
      const control = document.querySelector('.ControlLeft');
      control.classList.toggle('key_active');
      return;
    }
    if (key.classList[1] === 'AltLeft' && document.querySelector('.ControlLeft').className.includes('key_active')) {
      const control = document.querySelector('.ControlLeft');
      control.classList.toggle('key_active');
      const rus = document.querySelectorAll('.rus');
      const eng = document.querySelectorAll('.eng');
      rus.forEach((element) => {
        element.classList.toggle('hidden');
      });
      eng.forEach((element) => {
        element.classList.toggle('hidden');
      });
      if (lang === 'ru') {
        localStorage.setItem('lang', 'eng');
      } else {
        localStorage.setItem('lang', 'ru');
      }
      return;
    }
    if (key.classList[1] === 'AltLeft') return;
    if (key.classList[1] === 'CapsLock') {
      const capsLock = document.querySelector('.CapsLock');
      capsLock.classList.toggle('capslock-on');
      const caseDown = document.querySelectorAll('.case-down.caps');
      caseDown.forEach((element) => {
        element.classList.toggle('hidden');
      });
      const caseUp = document.querySelectorAll('.case-up.caps');
      caseUp.forEach((element) => {
        element.classList.toggle('hidden');
      });
    } else if (key.classList[1] === 'ShiftLeft' || key.classList[1] === 'ShiftRight') {
      const shift = (key.classList[1] === 'ShiftLeft') ? document.querySelector('.ShiftLeft') : document.querySelector('.ShiftRight');
      if ((shift.className.includes('ShiftLeft') && !document.querySelector('.ShiftRight').className.includes('key_active'))
      || (shift.className.includes('ShiftRight') && !document.querySelector('.ShiftLeft').className.includes('key_active'))) {
        shift.classList.toggle('key_active');
        const caseDown = document.querySelectorAll('.case-down');
        caseDown.forEach((element) => {
          element.classList.toggle('hidden');
        });
        const caseUp = document.querySelectorAll('.case-up');
        caseUp.forEach((element) => {
          element.classList.toggle('hidden');
        });
      }
    } else if (key.classList[1] === 'Tab') {
      changeTextareaValue(String.fromCharCode(9), key.classList[1]);
    } else if (key.classList[1] === 'Enter') {
      changeTextareaValue(String.fromCharCode(10), key.classList[1]);
    } else if (key.classList[1] === 'Backspace') {
      const Backspace = document.querySelector('.Backspace');
      changeTextareaValue(Backspace.innerText, key.classList[1]);
    } else if (key.classList[1] === 'Delete') {
      const Delete = document.querySelector('.Delete');
      changeTextareaValue(Delete.innerText, key.classList[1]);
    } else {
      const keys = document.querySelectorAll('.key');
      const textarea = document.querySelector('#textarea');
      if (key.classList[1] === 'ArrowLeft') {
        textarea.selectionStart -= 1;
        textarea.selectionEnd = textarea.selectionStart;
        return;
      }
      if (key.classList[1] === 'ArrowRight') {
        textarea.selectionStart += 1;
        textarea.selectionEnd = textarea.selectionStart;
        return;
      }
      if (key.classList[1] === 'ArrowUp') {
        textarea.selectionStart = 0;
        textarea.selectionEnd = textarea.selectionStart;
        return;
      }
      if (key.classList[1] === 'ArrowDown') {
        textarea.selectionStart = textarea.value.length;
        textarea.selectionEnd = textarea.selectionStart;
        return;
      }
      for (let i = 0; i < keys.length; i += 1) {
        if (key.classList[1] === keys[i].classList[1]) {
          changeTextareaValue(keys[i].innerText, key.classList[1]);
          if (document.querySelector('.ShiftLeft').className.includes('key_active')) {
            simulateClickOnShift(document.querySelector('.ShiftLeft'));
          } else if (document.querySelector('.ShiftRight').className.includes('key_active')) {
            simulateClickOnShift(document.querySelector('.ShiftRight'));
          }
        }
      }
    }
  }
}
