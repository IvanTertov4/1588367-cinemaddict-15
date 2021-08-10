const getRandomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const generateName = () => {
  const names = [
    'Lorem ipsum dolor',
    'Fusce tristique',
    'Aliquam erat',
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
    'Anne Mann',
    'Heinz Stroheim',
    'Dan Vong',
  ];

  const randomIndex = getRandomInteger(0, persons.length - 1);

  return persons[randomIndex];
};

const generateReleaseDate = () => {
  const releaseDates = [
    '1946',
    '1948',
    '1945',
    '1956',
  ];

  const randomIndex = getRandomInteger(0, releaseDates.length - 1);

  return releaseDates[randomIndex];
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

const generateCounrty = () => {
  const countries = [
    'USA',
    'Egnland',
    'Russia',
    'Germane',
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

const createFilmData = () => ({
  name: generateName(),
  poster: generatePoster(),
  description: generateDescription(),
  commentsCount: getRandomInteger(0, 5),
  mark: getRandomInteger(1, 9)  + 0.1,
  ageRate: getRandomInteger(6, 18),
  director: generatePerson(),
  writers: generatePerson(),
  actors: generatePerson(),
  releaseDate: generateReleaseDate(),
  runtime: generateRuntime(),
  country: generateCounrty(),
  genres: generateGenre(),
  iaAtWatchlist: Boolean(getRandomInteger(0,1)),
  isAlreadyWatched: Boolean(getRandomInteger(0,1)),
  iaAtFavorites: Boolean(getRandomInteger(0,1)),
});

const generateEmotion = () => {
  const emotions = [
    'happy',
    'boring',
    'foo',
    'angry',
  ];

  const randomIndex = getRandomInteger(0, emotions.length - 1);

  return emotions[randomIndex];
};

const generateText = () => {
  const text = [
    'Interesting setting and a good cas',
    'Booooooooooring',
    'Very very old. Meh',
    'Almost two hours? Seriously?',
  ];

  const randomIndex = getRandomInteger(0, text.length - 1);

  return text[randomIndex];
};

const createCommentData = () => ({
  emotion: generateEmotion(),
  text: generateText(),
  writer: generatePerson(),
  date: generateReleaseDate(),
});

const createRandomData = () => ({
  watchlist: getRandomInteger(0, 10),
  history: getRandomInteger(0, 10),
  favorites: getRandomInteger(0, 10),
  moviesInside: getRandomInteger(0, 1000),
});

export {createFilmData, createCommentData, createRandomData};
