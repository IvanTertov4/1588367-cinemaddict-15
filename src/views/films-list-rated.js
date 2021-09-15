import { createElement } from '../services/utils';

const createFilmListRatedTemplate = () => (
  `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container films-list__container--rated">

    </div>
  </section>`
);

export default class FilmListRated {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmListRatedTemplate();
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
