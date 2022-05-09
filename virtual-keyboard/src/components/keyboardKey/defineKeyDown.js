import changeTextareaValue from '../textarea/changeTextareaValue';
import { lang } from './keyboardKey';

export default function defineKeyDown(event) {
  if (event.code === 'F5') return;
  if (event.getModifierState('Control')
  && (event.code === 'KeyC'
  || event.code === 'KeyV'
  || event.code === 'KeyA'
  || event.code === 'KeyX'
  || event.code === 'KeyZ')) {
    return;
  }
  if ((event.code === 'ArrowLeft'
  || event.code === 'ArrowRight'
  || event.code === 'ArrowUp'
  || event.code === 'ArrowDown')
  && document.querySelector('#textarea') === document.activeElement) {
    const arrow = document.querySelector(`.${event.code}`);
    arrow.classList.add('key_active');
    return;
  }
  if ((event.code === 'ArrowLeft'
  || event.code === 'ArrowRight'
  || event.code === 'ArrowUp'
  || event.code === 'ArrowDown')
  && document.querySelector('#textarea') !== document.activeElement) {
    const textarea = document.querySelector('#textarea');
    if (event.code === 'ArrowLeft') {
      textarea.selectionStart -= 1;
      textarea.selectionEnd = textarea.selectionStart;
      return;
    }
    if (event.code === 'ArrowRight') {
      textarea.selectionStart += 1;
      textarea.selectionEnd = textarea.selectionStart;
      return;
    }
    if (event.code === 'ArrowUp') {
      textarea.selectionStart = 0;
      textarea.selectionEnd = textarea.selectionStart;
      return;
    }
    if (event.code === 'ArrowDown') {
      textarea.selectionStart = textarea.value.length;
      textarea.selectionEnd = textarea.selectionStart;
      return;
    }
  }
  event.preventDefault();
  if (event.getModifierState('Control') && event.getModifierState('Alt') && (event.code === 'ControlLeft' || event.code === 'AltLeft')) {
    const control = document.querySelector('.ControlLeft');
    control.classList.add('key_active');
    const alt = document.querySelector('.AltLeft');
    alt.classList.add('key_active');
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
  } else if (event.code === 'MetaLeft') {
    const meta = document.querySelector('.MetaLeft');
    meta.classList.add('key_active');
  } else if (event.code === 'CapsLock') {
    if (event.repeat !== true) {
      const capsLock = document.querySelector('.CapsLock');
      capsLock.classList.add('key_active');
      const caseDown = document.querySelectorAll('.case-down.caps');
      caseDown.forEach((element) => {
        element.classList.toggle('hidden');
      });
      const caseUp = document.querySelectorAll('.case-up.caps');
      caseUp.forEach((element) => {
        element.classList.toggle('hidden');
      });
    }
  } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (event.repeat !== true) {
      const shift = (event.code === 'ShiftLeft') ? document.querySelector('.ShiftLeft') : document.querySelector('.ShiftRight');
      if (!shift.className.includes('key_active')) {
        shift.classList.add('key_active');
        const caseDown = document.querySelectorAll('.case-down');
        caseDown.forEach((element) => {
          element.classList.toggle('hidden');
        });
        const caseUp = document.querySelectorAll('.case-up');
        caseUp.forEach((element) => {
          element.classList.toggle('hidden');
        });
      }
    }
  } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
    const contol = (event.code === 'ControlLeft') ? document.querySelector('.ControlLeft') : document.querySelector('.ControlRight');
    contol.classList.add('key_active');
  } else if (event.code === 'AltLeft' || event.code === 'AltRight') {
    const alt = (event.code === 'AltLeft') ? document.querySelector('.AltLeft') : document.querySelector('.AltRight');
    alt.classList.add('key_active');
  } else if (event.code === 'Tab') {
    const Tab = document.querySelector('.Tab');
    Tab.classList.add('key_active');
    changeTextareaValue(String.fromCharCode(9), event.code);
  } else if (event.code === 'Enter') {
    event.preventDefault();
    const Enter = document.querySelector('.Enter');
    Enter.classList.add('key_active');
    changeTextareaValue(String.fromCharCode(10), event.code);
  } else if (event.code === 'Backspace') {
    const Backspace = document.querySelector('.Backspace');
    Backspace.classList.add('key_active');

    changeTextareaValue(Backspace.innerText, event.code);
  } else if (event.code === 'Delete') {
    const Delete = document.querySelector('.Delete');
    Delete.classList.add('key_active');
    changeTextareaValue(Delete.innerText, event.code);
  } else {
    const keys = document.querySelectorAll('.key');
    for (let i = 0; i < keys.length; i += 1) {
      if (event.code === keys[i].classList[1]) {
        keys[i].classList.add('key_active');
        changeTextareaValue(keys[i].innerText, event.code);
      }
    }
  }
}
