import {renderGallery} from './render-gallery.js';
import {openBigPicture} from './full-size-mode.js';

const createGallery = (pictures) => {
  renderGallery(pictures);
  openBigPicture(pictures);
};

export {createGallery};
