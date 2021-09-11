import { getRandomInteger } from '../services/utils.js';
import { createElement } from '../services/utils';

const createFooterStatTemplate = () => {
  const moviesInside = getRandomInteger(100,1000);

  return`<p>
    ${moviesInside} movies inside
  </p>`;
};

export default class FooterStat {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFooterStatTemplate();
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
