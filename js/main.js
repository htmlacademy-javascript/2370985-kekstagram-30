import './form.js';

import { showMessageGetData } from './submit-message.js';

/* import {pictures} from './render-massive-picture.js'; */

import { createGallery } from './gallery.js';

const container = document.querySelector('.pictures');

fetch('https://30.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (!response.ok) {
      showMessageGetData('data-error');
    }
    return response.json();
  })
  .then((pictures) => {
    createGallery(pictures, container);
  });

