import { isEscapeKey } from './util.js';

const bodyElement = document.body;

const hideMessageSendData = () => {
  const message = document.querySelector('.success, .error');
  message.remove();
  removeEventMessage();
};

const cloneMessage = (event) => {
  const messageTemplate = document.querySelector(`#${event}`).content.querySelector(`.${event}`).cloneNode(true);
  bodyElement.append(messageTemplate);
};

const closeMessageGetData = (element) => {
  setTimeout(() => {
    document.querySelector(`.${element}`).remove();
  }, 5000);
};

const showMessageGetData = (event) => {
  cloneMessage(event);
  closeMessageGetData(event);
};

const onMessageElementButton = () => {
  hideMessageSendData();
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessageSendData();
  }
};

const onBodyClick = (evt) => {
  const window = document.querySelector('.success__inner, .error__inner');
  const click = evt.composedPath().includes(window);
  if (!click) {
    hideMessageSendData();
  }
};

const addEventMessage = () => {
  document.addEventListener('keydown', onEscKeydown);
  (document.querySelector('.success__button, .error__button')).addEventListener('click', onMessageElementButton);

  document.addEventListener('click', onBodyClick);
};

function removeEventMessage() {
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onBodyClick);
}

const showMessageSendData = (event) => {
  cloneMessage(event);
  addEventMessage();
};

export { showMessageSendData, showMessageGetData };
