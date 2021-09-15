import { createElement } from '../services/utils';

const createStatChartWrapTemplate = () => (`
  <div class="statistic__chart-wrap">
    <canvas class="statistic__chart" width="1000"></canvas>
  </div>
`);

export default class StatFilter {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createStatChartWrapTemplate();
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
