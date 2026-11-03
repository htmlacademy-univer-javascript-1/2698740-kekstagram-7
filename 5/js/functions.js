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

const MINUTES_PER_HOUR = 60;

// Вспомогательная функция: переводит строку 'часы:минуты' в общее число минут
const parseTimeToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * MINUTES_PER_HOUR + minutes;
};

// Основная функция проверки встречи
const isMeetingWithinWorkday = (workStart, workEnd, meetingStart, meetingDuration) => {
  const workStartMinutes = parseTimeToMinutes(workStart);
  const workEndMinutes = parseTimeToMinutes(workEnd);
  const meetingStartMinutes = parseTimeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
};

isMeetingWithinWorkday('08:00', '17:30', '14:00', 90); // true
isMeetingWithinWorkday('8:0', '10:0', '8:0', 120);     // true
isMeetingWithinWorkday('08:00', '14:30', '14:00', 90); // false
isMeetingWithinWorkday('14:00', '17:30', '08:0', 90);  // false
isMeetingWithinWorkday('8:00', '17:30', '08:00', 900); // false
