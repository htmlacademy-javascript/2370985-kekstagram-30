const getStringLength = (string, length) => string.length <= length;

getStringLength('проверяемая строка', 20);
getStringLength('проверяемая строка', 18);
getStringLength('проверяемая строка', 10);

const isStringPalindrome = (palindrome) => {
  const string = palindrome.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i <= string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }
    return true;
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


// Домашнее задание module5-task2

const workingHours = (startWorkingHours, endWorkingHours, startMeeting, durationMeeting) => {
  const massive = [startWorkingHours, endWorkingHours, startMeeting];
  const minute = [];
  for (let i = 0; i <= massive.length - 1; i++) {
    const stringSplitting = massive[i].split(':');
    const getMinutes = parseInt(stringSplitting[0] * 60, 10) + parseInt(stringSplitting[1], 10);
    minute.push(getMinutes);
  }
  if (minute[0] <= minute[2] === minute[1] >= minute[2] + durationMeeting) {
    return true;
  }
  return false;
};

workingHours('08:00', '17:30', '14:00', 90); // true
workingHours('8:0', '10:0', '8:0', 120); // true
workingHours('08:00', '14:30', '14:00', 90); // false
workingHours('14:00', '17:30', '08:0', 90); // false
workingHours('8:00', '17:30', '08:00', 900); // false

