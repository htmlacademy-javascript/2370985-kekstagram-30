import { isEscapeKey } from './util.js';

const COMMENTS_SHOWN = 5;

const bigPicture = document.querySelector('.big-picture');
const bodyElement = document.body;
const pictureElementImg = bigPicture.querySelector('.big-picture__img img');
const pictureElementCloseButton = document.querySelector('.big-picture__cancel');
const pictureElementContainerComment = bigPicture.querySelector('.social__comments');

const pictureElementComment = pictureElementContainerComment.children;
const templateComment = pictureElementComment[0];
let comments = [];
let lengthCommentShow = 0;

const pictureElementLoaderButton = document.querySelector('.comments-loader');

const renderPicture = ({ url, likes, description }) => {
  pictureElementImg.src = url;
  pictureElementImg.alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const createComment = ({ avatar, name, message }) => {
  const newComment = templateComment.cloneNode(true);
  const newCommentElementAvatar = newComment.querySelector('.social__picture');
  newCommentElementAvatar.src = avatar;
  newCommentElementAvatar.alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const fillingComment = () => {
  lengthCommentShow += COMMENTS_SHOWN;

  if (lengthCommentShow >= comments.length) {
    pictureElementLoaderButton.classList.add('hidden');
    lengthCommentShow = comments.length;
  } else {
    pictureElementLoaderButton.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < lengthCommentShow; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  pictureElementContainerComment.innerHTML = ' ';
  pictureElementContainerComment.append(fragment);

  bigPicture.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPicture.querySelector('.social__comment-shown-count').textContent = lengthCommentShow;
};

const hidePicture = () => {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePicture();
    removeEvent();
  }
};

const onClosePicture = () => {
  hidePicture();
  removeEvent();
};

const onLoaderCommentsClick = () => fillingComment();

const addEvent = () => {
  document.addEventListener('keydown', onEscKeydown);
  pictureElementCloseButton.addEventListener('click', onClosePicture);
  pictureElementLoaderButton.addEventListener('click', onLoaderCommentsClick);
};

function removeEvent() {
  document.removeEventListener('keydown', onEscKeydown);
  pictureElementCloseButton.removeEventListener('click', onClosePicture);
  pictureElementLoaderButton.removeEventListener('click', onLoaderCommentsClick);
}

const showPicture = (pictureData) => {
  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  lengthCommentShow = 0;

  comments = pictureData.comments;
  fillingComment();

  renderPicture(pictureData);

  addEvent();
};

export { showPicture };
