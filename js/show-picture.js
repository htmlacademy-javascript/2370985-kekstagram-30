import { isEscapeKey } from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closeButtonClosePictureElement = document.querySelector('.big-picture__cancel');
const containerComment = bigPictureElement.querySelector('.social__comments');
const containerCommentElement = containerComment.children;
const tampeteComment = containerCommentElement[0];

const renderPicture = ({ url, likes, comments, description }) => {
  bigPictureElement.querySelector('img').src = url;
  bigPictureElement.querySelector('img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPictureElement.querySelector('.social__caption').textContent = description;
  comments.forEach(({ avatar, name, message }) => {
    const сomment = tampeteComment.cloneNode(true);
    сomment.querySelector('.social__picture').src = avatar;
    сomment.querySelector('.social__picture').alt = name;
    сomment.querySelector('.social__text').textContent = message;
    containerComment.append(сomment);
  });
  bigPictureElement.querySelector('.social__comment-shown-count').textContent = containerCommentElement.length;
};


const showPicture = (pictureData) => {
  containerComment.innerHTML = ' ';
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);

  renderPicture(pictureData);
};

const hidePicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
};

const onCloseButtonPictureElement = () => {
  hidePicture();
};

closeButtonClosePictureElement.addEventListener('click', onCloseButtonPictureElement);

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePicture();
  }
};

export { showPicture };
