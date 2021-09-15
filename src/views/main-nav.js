import { createElement } from '../services/utils';

const createMainNavTemplate = (filters) => (
  `<nav class="main-navigation">
    <div class="main-navigation__items">${
  Object.values(filters).map((item) =>
    `<a href="#${item.href}" class="main-navigation__item">${item.name}${item.count ? `<span class="main-navigation__item-count">${item.count}</span>` : ''}</a>`).join(' ')
  }
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);

export default class MainNav {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createMainNavTemplate(this._filters);
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
