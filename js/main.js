import './form.js';

import { getData } from './api.js';

import { renderGallery } from './render-gallery.js';

import { openBigPicture } from './full-size-mode.js';

import { showFilter } from './filter.js';

import { showMessageGetData } from './submit-message.js';

getData()
  .then((response) => {
    if (response.ok) {
      return response;
    }
    showMessageGetData('data-error');
  })
  .then((response) => response.json())
  .then((pictures) => {
    renderGallery(pictures);
    openBigPicture(pictures);
    showFilter(pictures);
  })
  .catch(() => {
    showMessageGetData('data-error');
  });
