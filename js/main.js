import './form.js';

import { getData } from './api.js';

import { createGallery } from './gallery.js';

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
    createGallery(pictures);
    showFilter(pictures);
  })
  .catch(() => {
    showMessageGetData('data-error');
  });
