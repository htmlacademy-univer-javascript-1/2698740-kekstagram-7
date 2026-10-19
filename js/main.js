const PHOTOS_COUNT = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const MIN_MESSAGES = 1;
const MAX_MESSAGES = 2;

const DESCRIPTIONS = [
  'Отличный кадр на память!',
  'Прогулка на свежем воздухе.',
  'Лучший день в году.',
  'Кот снова попал в объектив.',
  'Закат сегодня просто невероятный.',
  'Тестирую новую камеру.',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артём',
  'Анна',
  'Максим',
  'Мария',
  'Дмитрий',
  'Екатерина',
  'Иван',
  'Ольга',
];

// Генератор случайного целого числа из диапазона [a, b]
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Выбор случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Генератор уникальных ID
const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

// Сборка текста комментария из 1 или 2 случайных предложений
const createMessage = () => Array.from(
  { length: getRandomInteger(MIN_MESSAGES, MAX_MESSAGES) },
  () => getRandomArrayElement(MESSAGES),
).join(' ');

// Генерация одного объекта комментария
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

// Генерация одного объекта фотографии
const createPhoto = (_, index) => {
  const id = index + 1;

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from(
      { length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) },
      createComment,
    ),
  };
};

// Создание итогового массива из 25 фотографий
const createPhotos = () => Array.from({ length: PHOTOS_COUNT }, createPhoto);

createPhotos();
