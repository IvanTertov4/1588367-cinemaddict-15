import AbstractView from './abstract.js';

const createStatChartWrapTemplate = () => (`
  <div class="statistic__chart-wrap">
    <canvas class="statistic__chart" width="1000"></canvas>
  </div>
`);

export default class StatFilter extends AbstractView {
  getTemplate() {
    return createStatChartWrapTemplate();
  }
}
