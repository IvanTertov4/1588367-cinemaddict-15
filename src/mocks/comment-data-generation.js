import dayjs from 'dayjs';

import { getRandomInteger } from '../services/random-integer';


const emotions = ['smile', 'sleeping', 'puke', 'angry'];
let commentId = 0;
const generateCommentId = (count) => {
  for (let i = 0; i < count; i++) {
    commentId++;
    return commentId;
  }
};

const generateEmotion = () => {
  const randomIndex = getRandomInteger(0, emotions.length - 1);

  return emotions[randomIndex];
};

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
  id: generateCommentId(75),
  author: generateСommentator(),
  commentText: generateCommentText(),
  date: generateCommentedDate(),
  emotion: generateEmotion(),
});

export {createCommentData};
