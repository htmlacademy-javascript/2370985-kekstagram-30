import {DESCRIPTION} from './massive.js';

import {QUANTITY_PICTURES, MIN_LIKES, MAX_LIKES} from './argument.js';

import {generatedNumber, createRandomNumberFromRangeGenerator} from './util.js';

import {comments} from './render-comments.js';

/* Генерация описания фотографии */
const renderId = generatedNumber();
const renderUrl = generatedNumber();
const renderDescription = createRandomNumberFromRangeGenerator(0, DESCRIPTION.length - 1);
const getElementFromGivenInterval = createRandomNumberFromRangeGenerator(MIN_LIKES, MAX_LIKES);

const renderPictureElement = () => ({
  id: renderId(),
  url: `photos/${renderUrl()}.jpg`,
  description: DESCRIPTION[renderDescription()],
  likes: getElementFromGivenInterval(),
  comments: comments(),
});
const pictures = Array.from({length: QUANTITY_PICTURES}, renderPictureElement);
export {pictures};


