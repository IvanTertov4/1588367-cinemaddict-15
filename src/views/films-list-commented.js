import { createElement } from '../services/utils';
const createFilmListŠ”ommentedTemplate = () => (
  `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
    <div class="films-list__container films-list__container--commented">

    </div>
  </section>`
);
export default class FilmListŠ”ommented {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmListŠ”ommentedTemplate();
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
