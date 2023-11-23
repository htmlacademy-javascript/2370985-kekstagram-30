import { isEscapeKey } from './util.js';

const bodyElement = document.body;
const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');
const templateDataError = document.querySelector('#data-error').content.querySelector('.data-error');

const closeMessageSuccess = () => {
  const message = document.querySelector('.success');
  const messageElementWindow = message.querySelector('.success__inner');
  const messageElementButton = message.querySelector('.success__button');

  const onMessageElementButton = () => {
    message.remove(bodyElement);
  };

  const onEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      message.remove(bodyElement);
    }
  };

  document.addEventListener('keydown', onEscKeydown);
  messageElementButton.addEventListener('click', onMessageElementButton);

  document.addEventListener('click', (evt) => {
    const click = evt.composedPath().includes(messageElementWindow);
    if (!click) {
      message.remove(bodyElement);
    }
  });
};

const showMessageSuccess = () => {
  const messageSuccess = templateSuccess.cloneNode(true);
  bodyElement.append(messageSuccess);
  closeMessageSuccess();
};

const closeMessageError = () => {
  const message = document.querySelector('.error');
  const messageElementWindow = message.querySelector('.error__inner');
  const messageElementButton = message.querySelector('.error__button');

  const onMessageElementButton = () => {
    message.remove(bodyElement);
  };

  const onEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      message.remove(bodyElement);
    }
  };

  document.addEventListener('keydown', onEscKeydown);
  messageElementButton.addEventListener('click', onMessageElementButton);

  document.addEventListener('click', (evt) => {
    const click = evt.composedPath().includes(messageElementWindow);
    if (!click) {
      message.remove(bodyElement);
    }
  });
};

const showMessageError = () => {
  const messageError = templateError.cloneNode(true);
  bodyElement.append(messageError);
  closeMessageError();
};

const closeMessageDataError = () => {
  const message = document.querySelector('.data-error');
  message.remove(bodyElement);
};

const showMessageDataError = () => {
  const messageDataError = templateDataError.cloneNode(true);
  bodyElement.append(messageDataError);
  setTimeout(() => {
    closeMessageDataError();
  }, 5000);
};


export { showMessageSuccess, showMessageError, showMessageDataError };
