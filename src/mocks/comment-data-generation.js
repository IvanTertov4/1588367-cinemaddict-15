import dayjs from 'dayjs';

import { getRandomInteger } from '../services/random-integer';

const generateСommentator = () => {
  const persons = [
    'Barbra Glenn',
    'Karen Butler',
    'Ann Young',
    'Dominic Ellis',
    'Richard Ryan',
  ];

  const randomIndex = getRandomInteger(0, persons.length - 1);

  return persons[randomIndex];
};

const generateCommentedDate = () => {
  const maxDateGap = 125;
  const dateGap = getRandomInteger(-maxDateGap, maxDateGap);

  const newDate = dayjs().add(dateGap, 'day').toDate();

  return newDate;
};

const generateEmotion = () => {
  const emotions = ['smile', 'sleeping', 'puke', 'angry'];

  const randomIndex = getRandomInteger(0, emotions.length - 1);

  return emotions[randomIndex];
};

const generateCommentText = () => {
  const text = [
    'Interesting setting and a good cast',
    'Booooooooooring',
    'Very very old. Meh',
    'Almost two hours? Seriously?',
  ];

  const randomIndex = getRandomInteger(0, text.length - 1);

  return text[randomIndex];
};

const createCommentData = () => ({
  id: getRandomInteger(0,15),
  author: generateСommentator(),
  commentText: generateCommentText(),
  date: generateCommentedDate(),
  emotion: generateEmotion(),
});

export {createCommentData};
