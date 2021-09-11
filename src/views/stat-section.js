import { createElement } from '../services/utils';

const createStatSectionTemplate = () => (`
  <section class="statistic">

  </section>
`);

export default class StatSection {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createStatSectionTemplate();
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
