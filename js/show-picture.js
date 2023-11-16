import { isEscapeKey } from './util.js';

const COMMENTS_SHOW = 5;

const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closeButtonPictureElement = document.querySelector('.big-picture__cancel');
const containerComment = bigPictureElement.querySelector('.social__comments');
const containerCommentElement = containerComment.children;
const tampeteComment = containerCommentElement[0];
let comments = [];
let lengthCommentShow = 0;

const loaderButtonPictureElement = document.querySelector('.comments-loader');

const renderPicture = ({ url, likes, description }) => {
  bigPictureElement.querySelector('img').src = url;
  bigPictureElement.querySelector('img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const createComment = ({ avatar, name, message }) => {
  const newComment = tampeteComment.cloneNode(true);
  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const fillingComment = () => {
  lengthCommentShow += COMMENTS_SHOW;

  if (lengthCommentShow >= comments.length) {
    loaderButtonPictureElement.classList.add('hidden');
    lengthCommentShow = comments.length;
  } else {
    loaderButtonPictureElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < lengthCommentShow; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  containerComment.innerHTML = ' ';
  containerComment.append(fragment);

  bigPictureElement.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPictureElement.querySelector('.social__comment-shown-count').textContent = lengthCommentShow;
};

const hidePicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  lengthCommentShow = 0;
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePicture();
    document.removeEventListener('keydown', onEscKeydown);
  }
};

const showPicture = (pictureData) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);

  comments = pictureData.comments;
  if (comments.length > 0) {
    fillingComment();
  }

  renderPicture(pictureData);
};

const onLoaderCommentsClick = () => fillingComment();

const onCloseButtonPictureElement = () => {
  hidePicture();
  document.removeEventListener('keydown', onEscKeydown);
};


closeButtonPictureElement.addEventListener('click', onCloseButtonPictureElement);
loaderButtonPictureElement.addEventListener('click', onLoaderCommentsClick);

export { showPicture };
