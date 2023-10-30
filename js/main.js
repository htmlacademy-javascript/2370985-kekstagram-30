const DESCRIPTION = [
  'На пляже',
  'Метро',
  'Прекрасный день',
  'Авто',
  'Коты',
  'Собака',
  'Домашние любимцы',
  'Ужасный день',
  'Завтрак',
  'Обед',
  'Обед в ресторане',
  'Ужин',
  'Праздничный ужин',
  'Пасмурно',
  'Дождливый день',
  'Длинная дорога',
  'Путешествие',
  'Любимая улица',
  'Пришли зима',
  'Пришла осень',
  'Пришло лето',
  'Пришла весна',
  'Работа',
  'Учеба',
  'Пятничный отдых',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];

  const NAME = [
    'Дмитрий',
    'Александр',
    'Геннадий',
    'Вадим',
    'Артем',
    'Яна',
    'Алексей',
    'Жана',
    'Сергей',
    'Олег',
    'Наталья',
    'Юлия',
    'Анна',
    'Екатерина',
];

let generatedObject = 25;
let minLikes = 15;
let maxLikes = 200;
let minComment = 0;
let maxComment = 30;

function generatedNumber() {
  let firstGeneratedNumber = 0;

  return function () {
    firstGeneratedNumber += 1;
    return firstGeneratedNumber;
  };
}

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomNumberFromRangeGenerator(a, b) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(a, b);
    if (previousValues.length >= (b - a + 1)) {
      console.error('Перебраны все числа из диапазона от ' + a + ' до ' + b);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(a, b);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function createRandomNumberFromRangeGeneratorNoRepetition(a, b) {
  const previousValues1 = [];

  return function () {
    let currentValue1 = getRandomNumber(a, b);
    previousValues1.push(currentValue1);
    return currentValue1;
  };
}

/* Создание комментов */

const generateCommentId = createRandomNumberFromRangeGenerator(1, 500);
const generateCommentAvatar = createRandomNumberFromRangeGeneratorNoRepetition(1, 6);

const generateCommentMessage = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const resultComment = () => ({
  commentId: generateCommentId(),
  commentAvatar: 'img/avatar-' + generateCommentAvatar() + '.svg',
  commentMessage: generateCommentMessage(MESSAGE),
  commentName: generateCommentMessage(NAME),
});

const comment = Array.from({ length: getRandomNumber(minComment, maxComment) }, resultComment);
console.log(comment);

/* Создание фото с комментами */

const generateId = generatedNumber();
const generateUrl = generatedNumber();

const generateDescription = createRandomNumberFromRangeGenerator(0, DESCRIPTION.length - 1);
/* const getRandomArrayElement = (elements) => elements[createRandomNumberFromRangeGenerator(0, elements.length - 1)]; */

const getElementFromGivenInterval = createRandomNumberFromRangeGenerator(minLikes, maxLikes);
/* const getElementFromGivenInterval = (a, b) => createRandomNumberFromRangeGenerator(a, b); */



const resultPhoto = () => ({
  id: generateId(),
  url: 'photos/' + generateUrl() + '.jpg',
  description: DESCRIPTION[generateDescription()],
  /* description: getRandomArrayElement(DESCRIPTION), */
  likes: getElementFromGivenInterval(),
  /* likes: getElementFromGivenInterval(), */
  comments: comment,
});

const homework = Array.from({ length: generatedObject }, resultPhoto);
console.log(homework);
