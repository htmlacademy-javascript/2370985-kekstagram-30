import {pictures} from './render-massive-picture.js';

import {createGallery} from './gallery.js';

const container = document.querySelector('.pictures');

createGallery(pictures, container);
