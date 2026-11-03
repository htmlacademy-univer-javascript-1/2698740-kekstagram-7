const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 10);

const isPalindrome = (string) => {
  const normalizedString = string.toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
};

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
