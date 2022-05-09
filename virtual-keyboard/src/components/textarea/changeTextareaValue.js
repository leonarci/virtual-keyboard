export default function changeTextareaValue(keyText, keyValue) {
  const textarea = document.querySelector('#textarea');
  const { selectionStart, selectionEnd } = textarea;
  if (keyValue === 'Backspace') {
    if (selectionStart === 0 && selectionStart === selectionEnd) return;
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
  } else if (keyValue === 'Delete') {
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
