import { createElement } from '../services/utils.js';
import {FAN_LIMIT, MOVIE_BUFF_LIMIT, userRanks} from '../services/constants.js';

const defineRank = (filter) => {
  if (filter > MOVIE_BUFF_LIMIT) {
    return userRanks.movieBuff;
  }
  if (filter > FAN_LIMIT) {
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

export default class UserProfile {
  constructor(filter) {
    this._element = null;
    this._filter = filter;
  }

  getTemplate() {
    if (this._filter === 0) {
      return '<div class="visually-hidden"></div>';
    }
    return createUserProfileTemplate(this._filter);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
