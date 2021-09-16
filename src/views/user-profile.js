import { createElement } from '../services/utils';
import {FAN_LIMIT, MOVIE_BUFF_LIMIT} from '../services/constants.js';

const defineRank = (ranks, filter) => {
  if (filter >= MOVIE_BUFF_LIMIT) {
    return ranks.movieBuff;
  } else if (filter >= FAN_LIMIT) {
    return ranks.fan;
  } else {
    return ranks.novice;
  }
};

const createUserProfileTemplate = (ranks, filter) => (
  `<section class="header__profile profile">
     <p class="profile__rating">${defineRank(ranks, filter)}</p>
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
