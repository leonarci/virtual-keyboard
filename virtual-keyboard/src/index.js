import Data from './data/data.json';
import './style.scss';
import {makeWrapper} from './components/wrapper/wrapper';
import {makeTextarea} from './components/textarea/textarea';
import {makeKeyboardBody} from './components/keyboardBody/keyboardBody';
import {makeHeader, makeParagraph} from './components/text/text';


const wrapper = makeWrapper()
document.body.appendChild(wrapper);

const h1 = makeHeader('RSS Virtual Keybord');
wrapper.appendChild(h1);

const textarea = makeTextarea('RSS Virtual Keybord');
wrapper.appendChild(textarea);

const keyboardBody = makeKeyboardBody();
wrapper.appendChild(keyboardBody);

const paragraphSystem = makeParagraph('Клавиатура создана в операционной системе Windows');
const paragraphChangeLanguage = makeParagraph('Для переключения языка комбинация: левый win + space');

wrapper.appendChild(paragraphSystem);
wrapper.appendChild(paragraphChangeLanguage);