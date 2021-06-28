//Получение случайного целого числа, частично взял с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const generateWholeNumber = (minNumber, maxNumber) => {
  if (minNumber < 0) {
    minNumber = 0;
  }
  if (maxNumber < minNumber) {
    maxNumber = minNumber;
  }
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};

generateWholeNumber();

//Получение случайного числа с плавающей запятой

const generateNumber = (minNumber, maxNumber, numberAfter) => {
  if (minNumber < 0) {
    minNumber = 0;
  }
  if (maxNumber < minNumber) {
    maxNumber = minNumber;
  }
  return Number((Math.random() * (maxNumber - minNumber) + minNumber).toFixed(numberAfter));
};

generateNumber();

//Массив для названия

const TITLES = ['1 комнатная квартира', '2х комнатная квартира', 'Квартира студия', 'Частный дом', 'Пентхаус'];

//Массив для описания

const DISCRIPTIONS = ['Уютная квартира с современным ремонтом', 'Жилье не далеко от метро', 'Жилье с современным ремонтом', 'Сдам квартиру, срочно, только славяне'];

//Типы объекта

const TYPES_OBJECT = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

//Время заезда и выезда

const TIMES = ['12:00', '13:00', '14:00'];

//Дополнительный опции

const FEATURES_OBJECT = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

//Фото

const PHOTOS_OBJECT = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

//Функция для генерации случайного массива строк

const generateStrings = (array) => {
  return array.slice(0, generateWholeNumber(1, array.length -1));
};

//Объект

const createObject = () => {
  const locationX = generateNumber(35.65000, 35.70000, 5);
  const locationY = generateNumber(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: 'img/avatars/user' + '0' + generateWholeNumber(1, 10) + '.png',
    },
    offer: {
      title: TITLES[generateWholeNumber(0, 4)],
      address: locationX + ', ' + locationY,
      price: generateWholeNumber(1000, 100000),
      type: TYPES_OBJECT[generateWholeNumber(0, 3)],
      rooms: generateWholeNumber(1, 5),
      guests: generateWholeNumber(1, 5),
      checkin: TIMES[generateWholeNumber(0, 2)],
      checkout: TIMES[generateWholeNumber(0, 2)],
      features: generateStrings(FEATURES_OBJECT),
      description: DISCRIPTIONS[generateWholeNumber(0, 3)],
      photos: generateStrings(PHOTOS_OBJECT),
    },
    location: {
      lat: generateNumber(35.65000, 35.70000, 5),
      lng: generateNumber(139.70000, 139.80000, 5),
    },
  };
};

const SIMILAR_OBJECT_COUNT = 10;

const similarObjects = new Array(SIMILAR_OBJECT_COUNT).fill(null).map(createObject);

console.log(similarObjects);
