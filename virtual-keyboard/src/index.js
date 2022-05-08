// import Data from './data/data.json';
import {
  row1, row2, row3, row4, row5,
} from './data/data';
import './style.scss';
import makeWrapper from './components/wrapper/wrapper';
import makeTextarea from './components/textarea/textarea';
import makeKeyboardBody from './components/keyboardBody/keyboardBody';
import { makeHeader, makeParagraph } from './components/text/text';
import KeyboardRow from './components/keyboardRow/keyboardRow';
import KeyboardKey from './components/keyboardKey/keyboardKey';

const wrapper = makeWrapper();
document.body.appendChild(wrapper);

const h1 = makeHeader('RSS Virtual Keybord');
wrapper.appendChild(h1);

const textarea = makeTextarea('RSS Virtual Keybord');
wrapper.appendChild(textarea);
// textarea.oninput = function () {
//   textarea.value = textarea.value.slice(0, textarea.value.length - 1);
// };
// textarea.innerText = 'dfgdfg';

const keyboardBody = makeKeyboardBody();
wrapper.appendChild(keyboardBody);

for (let i = 1; i < 6; i += 1) {
  const keyboardRow = new KeyboardRow();
  keyboardBody.appendChild(keyboardRow.create(`keyboard-row-${i}`));
}

for (let i = 0; i < row1.length; i += 1) {
  const key = new KeyboardKey(`${row1[i][0]}`, `${row1[i][1]}`, `${row1[i][2]}`, `${row1[i][3]}`, `${row1[i][4]}`);
  document.querySelector('#keyboard-row-1').appendChild(key.create());
}
for (let i = 0; i < row2.length; i += 1) {
  const key = new KeyboardKey(`${row2[i][0]}`, `${row2[i][1]}`, `${row2[i][2]}`, `${row2[i][3]}`, `${row2[i][4]}`);
  document.querySelector('#keyboard-row-2').appendChild(key.create());
}
for (let i = 0; i < row3.length; i += 1) {
  const key = new KeyboardKey(`${row3[i][0]}`, `${row3[i][1]}`, `${row3[i][2]}`, `${row3[i][3]}`, `${row3[i][4]}`);
  document.querySelector('#keyboard-row-3').appendChild(key.create());
}
for (let i = 0; i < row4.length; i += 1) {
  const key = new KeyboardKey(`${row4[i][0]}`, `${row4[i][1]}`, `${row4[i][2]}`, `${row4[i][3]}`, `${row4[i][4]}`);
  document.querySelector('#keyboard-row-4').appendChild(key.create());
}
for (let i = 0; i < row5.length; i += 1) {
  const key = new KeyboardKey(`${row5[i][0]}`, `${row5[i][1]}`, `${row5[i][2]}`, `${row5[i][3]}`, `${row5[i][4]}`);
  document.querySelector('#keyboard-row-5').appendChild(key.create());
}

function changeTextareaValue(keyText, event) {
  const { selectionStart, selectionEnd } = textarea;
  if (event.code === 'Backspace') {
    if (selectionStart === selectionEnd) {
      textarea.value = textarea.value.slice(0, selectionStart - 1)
      + textarea.value.slice(selectionEnd, textarea.length);
      textarea.selectionStart = selectionStart - 1;
      textarea.selectionEnd = selectionStart - 1;
    } else {
      textarea.value = textarea.value.slice(0, selectionStart)
      + textarea.value.slice(selectionEnd, textarea.length);
      textarea.selectionStart = selectionStart;
      textarea.selectionEnd = selectionStart;
    }
  } else if (event.code === 'Delete') {
    if (selectionStart === selectionEnd) {
      textarea.value = textarea.value.slice(0, selectionStart)
      + textarea.value.slice(selectionEnd + 1, textarea.length);
      textarea.selectionStart = selectionStart;
      textarea.selectionEnd = selectionStart;
    } else {
      textarea.value = textarea.value.slice(0, selectionStart)
      + textarea.value.slice(selectionEnd, textarea.length);
      textarea.selectionStart = selectionStart;
      textarea.selectionEnd = selectionStart;
    }
  } else {
    textarea.value = textarea.value.slice(0, selectionStart)
         + keyText + textarea.value.slice(selectionEnd, textarea.length);
    textarea.selectionStart = selectionStart + 1;
    textarea.selectionEnd = selectionStart + 1;
  }
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'F5' || event.code === 'MetaLeft') return;
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
  } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
    const contol = (event.code === 'ControlLeft') ? document.querySelector('.ControlLeft') : document.querySelector('.ControlRight');
    contol.classList.add('key_active');
  } else if (event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
    const alt = (event.code === 'AltLeft') ? document.querySelector('.AltLeft') : document.querySelector('.AltRight');
    alt.classList.add('key_active');
  } else if (event.code === 'Tab') {
    event.preventDefault();
    const Tab = document.querySelector('.Tab');
    Tab.classList.add('key_active');
    changeTextareaValue(String.fromCharCode(9), event);
    // textarea.value += String.fromCharCode(9);
  } else if (event.code === 'Enter') {
    event.preventDefault();
    const Enter = document.querySelector('.Enter');
    Enter.classList.add('key_active');
    changeTextareaValue(String.fromCharCode(10), event);
    // textarea.value += String.fromCharCode(10);
  } else if (event.code === 'Backspace') {
    const Backspace = document.querySelector('.Backspace');
    Backspace.classList.add('key_active');
    // textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    changeTextareaValue(Backspace.innerText, event);
  } else if (event.code === 'Delete') {
    const Delete = document.querySelector('.Delete');
    Delete.classList.add('key_active');
    changeTextareaValue(Delete.innerText, event);
    // textarea.value = textarea.value.slice(0, textarea.value.length - 1);
  } else {
    const keys = document.querySelectorAll('.key');
    for (let i = 0; i < keys.length; i += 1) {
      if (event.code === keys[i].classList[1]) {
        keys[i].classList.add('key_active');
        changeTextareaValue(keys[i].innerText, event);
        // const { selectionStart, selectionEnd } = textarea;
        // textarea.value = textarea.value.slice(0, selectionStart)
        //  + keys[i].innerText + textarea.value.slice(selectionEnd, textarea.length);
        // textarea.selectionStart = selectionStart + 1;
        // textarea.selectionEnd = selectionStart + 1;
        // textarea.value = textarea.value.slice(0, textarea.value.length - 1);
      // if (document.activeElement.id !== 'textarea') {
      // }
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    const shift = (event.code === 'ShiftLeft') ? document.querySelector('.ShiftLeft') : document.querySelector('.ShiftRight');
    shift.classList.remove('key_active');
    const caseDown = document.querySelectorAll('.case-down');
    caseDown.forEach((element) => {
      element.classList.toggle('hidden');
    });
    const caseUp = document.querySelectorAll('.case-up');
    caseUp.forEach((element) => {
      element.classList.toggle('hidden');
    });
  } else {
    const keys = document.querySelectorAll('.key');
    for (let i = 0; i < keys.length; i += 1) {
      if (event.code === 'CapsLock') {
        const capsLock = document.querySelector('.CapsLock');
        capsLock.classList.remove('key_active');
        capsLock.classList.toggle('capslock-on');
      } else if (event.code === keys[i].classList[1]) {
        keys[i].classList.remove('key_active');
      }
    }
  }
});

keyboardBody.addEventListener('mousedown', (event) => {
  if (event.target.classList[0] === 'key') {
    event.target.classList.add('key_active');
    textarea.value += event.target.innerText;
  }
});

keyboardBody.addEventListener('mouseup', (event) => {
  event.target.classList.remove('key_active');
});

const paragraphSystem = makeParagraph('Клавиатура создана в операционной системе Windows');
const paragraphChangeLanguage = makeParagraph('Для переключения языка комбинация: левые ctrl + alt');
// paragraphChangeLanguage.addEventListener('click', (event) => {
//   console.log(event.getModifierState('CapsLock'));
// });

wrapper.appendChild(paragraphSystem);
wrapper.appendChild(paragraphChangeLanguage);
