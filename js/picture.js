import {homework} from './generate-object.js';

const pictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const userPicture = homework;

const similarListFragment = document.createDocumentFragment();

userPicture.forEach(({url, description, likes, comments}) => {
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.append(pictureElement);
});

pictures.append(similarListFragment);
