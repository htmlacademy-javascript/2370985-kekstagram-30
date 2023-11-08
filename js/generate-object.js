import {DESCRIPTION} from './massive.js';

import {GENERATE_DOBJECT, MIN_LIKES, MAX_LIKES} from './argument.js';

import {generatedNumber, createRandomNumberFromRangeGenerator} from './util.js';

import {comment} from './generate-comments.js';

/* Генерация описания фотографии */
const generateId = generatedNumber();
const generateUrl = generatedNumber();
const generateDescription = createRandomNumberFromRangeGenerator(0, DESCRIPTION.length - 1);
const getElementFromGivenInterval = createRandomNumberFromRangeGenerator(MIN_LIKES, MAX_LIKES);

const generateObject = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: DESCRIPTION[generateDescription()],
  likes: getElementFromGivenInterval(),
  comments: comment(),
});
const homework = Array.from({length: GENERATE_DOBJECT}, generateObject);
export {homework};


