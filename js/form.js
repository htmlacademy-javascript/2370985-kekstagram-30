import { isEscapeKey } from './util.js';

import { showMessageSendData } from './submit-message.js';

import { init, reset } from './effect.js';

import { addEventScale, removeEventScale } from './scale.js';

import './scale.js';

const MAX_QUANTITY_HASHTAG = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const ErrorText = {
  INVALID_PATTERN: 'Введён неправильный хэш-тег',
  INVALID_QUANTITY_HASHTAG: `Максимум ${MAX_QUANTITY_HASHTAG} хэш-тегов`,
  NOT_BE_REPEATED: 'Хэш-теги не должны повторяться',
};

const bodyElement = document.body;
const form = document.querySelector('.img-upload__form');
const formElementOverlay = form.querySelector('.img-upload__overlay');
const formElementInputField = form.querySelector('.img-upload__input');
const formElementCancelButton = form.querySelector('.img-upload__cancel');
const formElementHashtagFeild = form.querySelector('.text__hashtags');
const formElementCommentFeild = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const hideOverlay = () => {
  form.reset();
  pristine.reset();
  formElementOverlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};

const focusedTextField = () =>
  document.activeElement === formElementHashtagFeild ||
  document.activeElement === formElementCommentFeild;

function isErrorMessageExists() {
  return Boolean(document.querySelector('.error'));
}

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !focusedTextField() && !isErrorMessageExists()) {
    evt.preventDefault();
    hideOverlay();
    removeEventForm();
  }
};

const onCloseButtonForm = () => {
  hideOverlay();
  removeEventForm();
};

const showOverlay = () => {
  formElementOverlay.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  addEventForm();
};

formElementInputField.addEventListener('change', (evt) => {
  evt.preventDefault();
  showOverlay();
});

const normalizeTags = (hashtagString) => hashtagString.trim().split(' ').filter((hashtag) => Boolean(hashtag.length));

const matchingSymbols = (value) => normalizeTags(value).every((hashtag) => VALID_SYMBOLS.test(hashtag));

const matchingQuantity = (value) => normalizeTags(value).length <= MAX_QUANTITY_HASHTAG;

const matchingRepeated = (value) => {
  const lowerCaseHashtag = normalizeTags(value).map((hashtag) => hashtag.toLowerCase());
  return lowerCaseHashtag.length === new Set(lowerCaseHashtag).size;
};

pristine.addValidator(
  formElementHashtagFeild,
  matchingSymbols,
  ErrorText.INVALID_PATTERN,
  1,
  true);

pristine.addValidator(
  formElementHashtagFeild,
  matchingQuantity,
  ErrorText.INVALID_QUANTITY_HASHTAG,
  2,
  true);

pristine.addValidator(
  formElementHashtagFeild,
  matchingRepeated,
  ErrorText.NOT_BE_REPEATED,
  3,
  true);

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);

      fetch(
        'https://30.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
            showMessageSendData('success');
          } else {
            showMessageSendData('error');
          }

        })
        .catch(() => {
          showMessageSendData('error');
        });
    }
  });
};

setUserFormSubmit(hideOverlay);

function addEventForm() {
  document.addEventListener('keydown', onEscKeydown);
  formElementCancelButton.addEventListener('click', onCloseButtonForm);
  addEventScale();
  init();
}

function removeEventForm() {
  document.removeEventListener('keydown', onEscKeydown);
  formElementCancelButton.removeEventListener('click', onCloseButtonForm);
  removeEventScale();
  reset();
}

