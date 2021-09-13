import { createElement } from '../services/utils';

const createUserProfileTemplate = (ranks, filter) => {
  let definedRank = '';
  if (filter >= 1) {
    definedRank = ranks.novice;
  }
  if (filter >= 11) {
    definedRank = ranks.fan;
  }
  if (filter >= 21) {
    definedRank = ranks.movieBuff;
  }
  return `<section class="header__profile profile">
     <p class="profile__rating">${definedRank}</p>
     <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
   </section>`;
};

export default class UserProfile {
  constructor(ranks, filter) {
    this._element = null;
    this._ranks = ranks;
    this._filter = filter;
  }

  getTemplate() {
    if (this._filter === 0) {
      return null;
    }
    return createUserProfileTemplate(this._ranks, this._filter);
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
