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
const generatedObject = 25;
const minLikes = 15;
const maxLikes = 200;
const minComment = 0;
const maxComment = 30;

/* Перечисление чисел */

function generatedNumber() {
  let firstGeneratedNumber = 0;
  return function () {
    firstGeneratedNumber += 1;
    return firstGeneratedNumber;
  };
}

/* Создание случайного числа */

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/* Создание неповторяющегося случайного числа */

function createRandomNumberFromRangeGenerator(a, b) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomNumber(a, b);
    if (previousValues.length >= (b - a + 1)) {
      console.error(`Перебраны все числа из диапазона от ${a} до ${b}`);  // eslint-disable-line
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(a, b);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

/* Генерация комментов */

const generateCommentId = createRandomNumberFromRangeGenerator(1, 500);
const generateCommentAvatar = () => getRandomNumber(1, 6);
const generateCommentMessage = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const generateComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${generateCommentAvatar()}.svg`,
  message: generateCommentMessage(MESSAGE),
  name: generateCommentMessage(NAME),
});

const comment = () => Array.from({ length: getRandomNumber(minComment, maxComment) }, generateComment);

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
console.log(homework); // eslint-disable-line
