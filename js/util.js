
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

const isEscapeKey = (evt) => evt.key === 'Escape';

export {generatedNumber, getRandomNumber, createRandomNumberFromRangeGenerator, isEscapeKey};
