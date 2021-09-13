import { createElement } from '../services/utils';

const createNoFilms = (state) => (`
  <section class="films-list">
    <h2 class="films-list__title">${state}</h2>
  </section>`
);
export default class NoFilms {
  constructor(state) {
    this._state = state;
    this._element = null;
  }

  getTemplate() {
    return createNoFilms(this._state);
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

