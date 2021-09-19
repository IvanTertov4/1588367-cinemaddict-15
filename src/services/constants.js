const emotions = ['smile', 'sleeping', 'puke', 'angry'];
const userRanks = {
  novice: 'Novice',
  fan: 'Fan',
  movieBuff: 'Movie buff',
};
const CARD_COUNT = 5;
const CARD_TOP_COUNT = 2;
const GENERATION_CARD_COUNT = 25;
const COMMENT_COUNT = 75;
const FAN_LIMIT = 11;
const MOVIE_BUFF_LIMIT = 21;
const ESC_CODE = 'Escape';
const bodyPlace = document.body;
const headerPlace = bodyPlace.querySelector('.header');
const mainPlace = bodyPlace.querySelector('.main');
const footerStatisticsPlace = bodyPlace.querySelector('.footer__statistics');

export {emotions, CARD_COUNT, CARD_TOP_COUNT, GENERATION_CARD_COUNT, COMMENT_COUNT, userRanks, FAN_LIMIT, MOVIE_BUFF_LIMIT, ESC_CODE, bodyPlace, headerPlace, mainPlace, footerStatisticsPlace};
