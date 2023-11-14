import {MESSAGE, NAME} from './massive.js';

import {MAX_ID_COMMENT, MIN_COMMENT, MAX_COMMENT} from './argument.js';

import {getRandomNumber, createRandomNumberFromRangeGenerator} from './util.js';

/* Генерация комментов */

const renderCommentId = createRandomNumberFromRangeGenerator(0, MAX_ID_COMMENT);
const renderCommentAvatar = () => getRandomNumber(1, 6);
const renderCommentMessage = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const renderComment = () => ({
  id: renderCommentId(),
  avatar: `img/avatar-${renderCommentAvatar()}.svg`,
  message: renderCommentMessage(MESSAGE),
  name: renderCommentMessage(NAME),
});

const comments = () => Array.from({ length: getRandomNumber(MIN_COMMENT, MAX_COMMENT) }, renderComment);
export {comments};

