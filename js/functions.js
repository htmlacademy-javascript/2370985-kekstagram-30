const getStringLength = (string, length) => {
  return string.length <= length;
};

getStringLength('проверяемая строка', 20);
getStringLength('проверяемая строка', 18);
getStringLength('проверяемая строка', 10);

const isStringPalindrome = (palindrome) => {
  const string = palindrome.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i <= string.length / 2; i++) {
    if (string.at(i) === string.at(-i - 1)) {
      return true;
    }
    return false;
  }
};

isStringPalindrome('топот');
isStringPalindrome('ДовОд');
isStringPalindrome('Кекс');
isStringPalindrome('Лёша на полке клопа нашёл ');

const extractNumbers = (string) => {
  const symbol = string.toString();
  let result = '';
  for (let i = 0; i <= symbol.length; i++) {
    if (!Number.isNaN(parseInt(symbol[i], 10))) {
      result += symbol[i];
    }
  }
  return parseInt(result, 10);
};

extractNumbers('2023 год');
extractNumbers('ECMAScript 2022');
extractNumbers('1 кефир, 0.5 батона');
extractNumbers('агент 007');
extractNumbers('а я томат');
extractNumbers(2023);
extractNumbers(-1);
extractNumbers(1.5);
