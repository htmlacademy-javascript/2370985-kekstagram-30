import {showPicture} from './show-picture.js';

const container = document.querySelector('.pictures');

const openBigPicture = (pictures) => {
  container.addEventListener('click', (evt) => {
    const picture = evt.target.closest('[data-picture-element-id]');

    if (! picture) {
      return;
    }

    evt.preventDefault();
    const pictureId = +picture.dataset.pictureElementId;
    const pictureData = pictures.find(({id}) => id === pictureId);

    showPicture(pictureData);
  });
};

export {openBigPicture};
