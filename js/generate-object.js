import {DESCRIPTION} from './massive.js';

import {generatedObject} from './argument.js';

import {minLikes} from './argument.js';
import {maxLikes} from './argument.js';

import {generatedNumber} from './util.js';
import {createRandomNumberFromRangeGenerator} from './util.js';

import {comment} from './generate-comments.js';

/* Генерация описания фотографии */
const generateId = generatedNumber();
const generateUrl = generatedNumber();
const generateDescription = createRandomNumberFromRangeGenerator(0, DESCRIPTION.length - 1);
const getElementFromGivenInterval = createRandomNumberFromRangeGenerator(minLikes, maxLikes);

const generateObject = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: DESCRIPTION[generateDescription()],
  likes: getElementFromGivenInterval(),
  comments: comment(),
});
const homework = Array.from({length: generatedObject}, generateObject);
export {homework};


