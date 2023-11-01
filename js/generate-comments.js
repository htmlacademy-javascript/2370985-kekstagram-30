import {MESSAGE} from './massive.js';
import {NAME} from './massive.js';

import {maxIdComment} from './argument.js';
import {minComment} from './argument.js';
import {maxComment} from './argument.js';

import {getRandomNumber} from './util.js';
import {createRandomNumberFromRangeGenerator} from './util.js';

/* Генерация комментов */

const generateCommentId = createRandomNumberFromRangeGenerator(0, maxIdComment);
const generateCommentAvatar = () => getRandomNumber(1, 6);
const generateCommentMessage = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const generateComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${generateCommentAvatar()}.svg`,
  message: generateCommentMessage(MESSAGE),
  name: generateCommentMessage(NAME),
});

const comment = () => Array.from({ length: getRandomNumber(minComment, maxComment) }, generateComment);
export {comment};
