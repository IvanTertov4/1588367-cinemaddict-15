import { createElement } from '../services/utils';

const createFilmsShowMoreBtnTemplate = () => (
  `<button class="films-list__show-more">
    Show more
  </button>`
);

export default class FilmsShowMoreBtn {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsShowMoreBtnTemplate();
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
