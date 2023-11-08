import {MESSAGE, NAME} from './massive.js';

import {MAX_ID_COMMENT, MIN_COMMENT, MAX_COMMENT} from './argument.js';

import {getRandomNumber, createRandomNumberFromRangeGenerator} from './util.js';

/* Генерация комментов */

const generateCommentId = createRandomNumberFromRangeGenerator(0, MAX_ID_COMMENT);
const generateCommentAvatar = () => getRandomNumber(1, 6);
const generateCommentMessage = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const generateComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${generateCommentAvatar()}.svg`,
  message: generateCommentMessage(MESSAGE),
  name: generateCommentMessage(NAME),
});

const comment = () => Array.from({ length: getRandomNumber(MIN_COMMENT, MAX_COMMENT) }, generateComment);
export {comment};

