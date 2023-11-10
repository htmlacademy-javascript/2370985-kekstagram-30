import { isEscapeKey } from './util.js';

import { homework } from './generate-object.js';

const picture = document.querySelectorAll('.picture');
const bigPictureOpen = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const bigPictureUrlElement = bigPictureOpen.querySelector('.big-picture__img')
  .querySelector('img');
  const bigPictureLikesElement = bigPictureOpen.querySelector('.social__header')
  .querySelector('.likes-count');
const bigPictureCommentElement = bigPictureOpen.querySelector('.social__comments');
const bigPictureShowCommentElement = bigPictureCommentElement.children;
console.log(bigPictureShowCommentElement)
const bigPictureShowQuantityCommentElement = bigPictureOpen.querySelector('.social__comment-count')
  .querySelector('.social__comment-shown-count');
const bigPictureSumCommentElement = bigPictureOpen.querySelector('.social__comment-count')
  .querySelector('.social__comment-total-count');
const bigPictureCaptionElement = bigPictureOpen.querySelector('.social__caption');
const bigPictureCommentLoader = bigPictureOpen.querySelector('.comments-loader');


for (let i = 0; i < picture.length; i++) {
  let pictureElement = picture[i];

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPictureOpen.classList.remove('hidden');

    const userPicture = homework;

    const tampeteComment = bigPictureShowCommentElement[0];

    for (let j = bigPictureShowCommentElement.length - 1; j >= 0; j--) {
      bigPictureShowCommentElement[j].remove();
    }

    const fragment = document.createDocumentFragment();

    for (let j = 0; j < userPicture[i].comments.length; j++) {
      const renderNewComment = tampeteComment.cloneNode(true);
      renderNewComment.querySelector('.social__picture').src = userPicture[i].comments[j].avatar;
      renderNewComment.querySelector('.social__picture').alt = userPicture[i].comments[j].name;
      renderNewComment.querySelector('.social__text').textContent = userPicture[i].comments[j].message;
      fragment.append(renderNewComment);
    }

    bigPictureCommentElement.append(fragment);

    bigPictureUrlElement.src = pictureElement.querySelector('.picture__img').src;
    bigPictureLikesElement.textContent = pictureElement.querySelector('.picture__likes').textContent;
    bigPictureShowQuantityCommentElement.textContent = bigPictureShowCommentElement.length;
    bigPictureSumCommentElement.textContent = pictureElement.querySelector('.picture__comments').textContent;
    bigPictureCaptionElement.textContent = pictureElement.querySelector('.picture__img').alt;

    bigPictureCommentLoader.classList.add('hidden');

    document.querySelector('body').classList.add('modal-open');
  });
}


bigPictureClose.addEventListener('click', () => {
  bigPictureOpen.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureOpen.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});
