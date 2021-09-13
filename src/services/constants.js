const emotions = ['smile', 'sleeping', 'puke', 'angry'];
const userRanks = {
  novice: 'Novice',
  fan: 'Fan',
  movieBuff: 'Movie buff',
};
const filmListStates = {
  all: 'There are no movies in our database',
  watchlist: 'There are no movies to watch now',
  history: 'There are no watched movies now',
  favorites: 'There are no favorite movies now',
};
const CARD_COUNT = 5;
const CARD_TOP_COUNT = 2;
const GENERATION_CARD_COUNT = 25;
const COMMENT_COUNT = 75;

export {emotions, CARD_COUNT, CARD_TOP_COUNT, GENERATION_CARD_COUNT, COMMENT_COUNT, userRanks, filmListStates};
