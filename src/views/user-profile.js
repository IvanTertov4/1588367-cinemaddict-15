import AbstractView from './abstract.js';
import {FAN_LIMIT, MOVIE_BUFF_LIMIT, userRanks} from '../services/constants.js';

const defineRank = (filter) => {
  if (filter >= MOVIE_BUFF_LIMIT) {
    return userRanks.movieBuff;
  } else if (filter >= FAN_LIMIT) {
    return userRanks.fan;
  } else {
    return userRanks.novice;
  }
};

const createUserProfileTemplate = (filter) => (
  `<section class="header__profile profile">
     <p class="profile__rating">${defineRank(filter)}</p>
     <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
   </section>`
);

export default class UserProfile extends AbstractView {
  constructor(filter) {
    super();

    this._filter = filter;
  }

  getTemplate() {
    if (this._filter === 0) {
      return '<div class="visually-hidden"></div>';
    }
    return createUserProfileTemplate(this._filter);
  }
}
