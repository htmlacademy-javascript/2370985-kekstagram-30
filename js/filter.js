import { getRandomNumber, debounce } from './util.js';

import { createGallery } from './gallery.js';

const MAX_RANDOM_FILTER = 10;

const filter = document.querySelector('.img-filters');
const filterElementForm = document.querySelector('.img-filters__form');
const filterElementButton = filterElementForm.querySelectorAll('.img-filters__button');

const FilterEnum = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed'
};


const filterHandlers = {
  [FilterEnum.DEFAULT]: (data) => data,
  [FilterEnum.RANDOM]: (data) => {
    const randomIndexList = [];
    const max = Math.min(MAX_RANDOM_FILTER, data.length);
    while (randomIndexList.length < max) {
      const index = getRandomNumber(0, data.length - 1);
      if (!randomIndexList.includes(index)) {
        randomIndexList.push(index);
      }
    }
    return randomIndexList.map((index) => data[index]);
  },
  [FilterEnum.DISCUSSED]: (data) => [...data].sort((item1, item2) => item2.comments.length - item1.comments.length),
};

let currentFilter = FilterEnum.DEFAULT;

const repaint = (typeFilter, data) => {
  if(currentFilter !== typeFilter) {
    const filterData = filterHandlers[typeFilter](data);
    const pictures = document.querySelectorAll('.picture');
    pictures.forEach((element) => element.remove());
    createGallery(filterData);
    currentFilter = typeFilter;
  }
};

const debouncedRepaint = debounce(repaint);

const showFilter = (data) => {
  filter.classList.remove('img-filters--inactive');

  filterElementForm.addEventListener('click', (evt) => {
    const selectedButton = evt.target.closest('.img-filters__button');
    filterElementButton.forEach((element) => element.classList.remove('img-filters__button--active'));
    selectedButton.classList.add('img-filters__button--active');

    if (evt.target.closest('#filter-default')) {
      debouncedRepaint(FilterEnum.DEFAULT, data);
    }
    if (evt.target.closest('#filter-random')) {
      debouncedRepaint(FilterEnum.RANDOM, data);
    }
    if (evt.target.closest('#filter-discussed')) {
      debouncedRepaint(FilterEnum.DISCUSSED, data);
    }
  });
};

export { showFilter };
