import dayjs from 'dayjs';

import { getRandomInteger } from '../services/random-integer';

const generateTitle = () => {
  const names = [
    'The Dance of Life',
    'Sagebrush Trail',
    'The Man with the Golden Arm',
  ];

  const randomIndex = getRandomInteger(0, names.length - 1);

  return names[randomIndex];
};

const generatePoster = () => {
  const posters = [
    './images/posters/made-for-each-other.png',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/sagebrush-trail.jpg',
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);

  return posters[randomIndex];
};

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Ullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generatePerson = () => {
  const persons = [
    'Anthony Mann',
    'Anne Wigton',
    'Heinz Herald',
    'Erich von Stroheim',
    'Mary Beth',
    'Mary Hughes',
    'Dan Duryea',
    'Anne Brown',
    'Heinz Stroheim',
    'Dan Vong',
    'Peter Goodwin',
    'Peter Shaw',
    'Richard Norris',
    'Sabrina Austin',
    'Brittney Holmes',
    'Peter Wilkinson',
    'Barbra Glenn',
    'Karen Butler',
    'Ann Young',
    'Dominic Ellis',
    'Richard Ryan',
  ];

  const randomIndex = getRandomInteger(0, persons.length - 1);

  return persons[randomIndex];
};

const generateReleaseDate = () => {
  const maxDateGap = 18;
  const dateGap = getRandomInteger(-maxDateGap, -maxDateGap/2);
  const newDate = dayjs().add(dateGap, 'year').toDate();
  return newDate;
};

const generateRuntime = () => {
  const runtimes = [
    '1h 25m',
    '2h 18m',
    '1h 56m',
    '3h 48m',
  ];

  const randomIndex = getRandomInteger(0, runtimes.length - 1);

  return runtimes[randomIndex];
};

const generateReleaseCounrty = () => {
  const countries = [
    'USA',
    'England',
    'Russia',
    'Germany',
  ];

  const randomIndex = getRandomInteger(0, countries.length - 1);

  return countries[randomIndex];
};

const generateGenre = () => {
  const genres = [
    'Drama',
    'Film-Noir',
    'Mystery',
    'Sci-fi',
  ];

  const randomIndex = getRandomInteger(0, genres.length - 1);

  return genres[randomIndex];
};

const generateUserDetails = () => ({
  watchlist: Boolean(getRandomInteger(0,1)),
  alreadyWatched: Boolean(getRandomInteger(0,1)),
  favourite: Boolean(getRandomInteger(0,1)),
});

const createFilmData = () => ({
  id: getRandomInteger(0,15),
  comments: [ ],
  filmInfo: {
    title: generateTitle(),
    alternativeTitle: generateTitle(),
    totalRating: getRandomInteger(0, 10),
    poster: generatePoster(),
    ageRating: getRandomInteger(6, 18),
    director: generatePerson(),
    writers: [
      generatePerson(), generatePerson(), generatePerson(),
    ],
    actors: [
      generatePerson(), generatePerson(),
    ],
    release: {
      date: generateReleaseDate(),
      releaseCountry: generateReleaseCounrty(),
    },
    runtime: generateRuntime(),
    genre: [
      generateGenre(),
    ],
    description: generateDescription(),
  },
  userDetails: {
    watchlist: generateUserDetails().watchlist,
    alreadyWatched: generateUserDetails().alreadyWatched,
    watchingDate: generateReleaseDate(),
    favorite: generateUserDetails().favourite,
  },
});

export {createFilmData};
