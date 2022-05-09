export default function defineKeyUp(event) {
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
}
