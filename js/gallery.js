import {renderGallery} from './render-gallery.js';
import {openBigPicture} from './full-size-mode.js';

const createGallery = (pictures, container) => {
  renderGallery(pictures, container);
  openBigPicture(pictures, container);
};

export {createGallery}
