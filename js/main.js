import './form.js';

import { getData } from './api.js';

import { createGallery } from './gallery.js';

import { showFilter } from './filter.js';

getData()
  .then((pictures) => {
    createGallery(pictures);
    showFilter(pictures);
  });

