import { isEscapeKey } from './util.js';

const bodyElement = document.body;

const hideMessageSendData = () => {
  const message = document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  removeEventMessage();
};

const cloneMessage = (event) => {
  const messageTemplate = document.querySelector(`#${event}`).content.querySelector(`.${event}`).cloneNode(true);
  bodyElement.append(messageTemplate);
};

const showMessageSendData = (event) => {
  cloneMessage(event);
  addEventMessage();
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
  const click = evt.composedPath().includes(document.querySelector('.success__inner')) || evt.composedPath().includes(document.querySelector('.error__inner'));
  if (!click) {
    hideMessageSendData();
  }
};

function addEventMessage() {
  document.addEventListener('keydown', onEscKeydown);
  (document.querySelector('.success__button') || document.querySelector('.error__button')).addEventListener('click', onMessageElementButton);

  document.addEventListener('click', onBodyClick);
}

function removeEventMessage() {
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onBodyClick);
}

export { showMessageSendData, showMessageGetData };
