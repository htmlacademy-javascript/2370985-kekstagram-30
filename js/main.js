import './form.js';

import { getData } from './api.js';

import { createGallery } from './gallery.js';

const container = document.querySelector('.pictures');

getData()
  .then((pictures) => {
    createGallery(pictures, container);
  });

