import AbstractView from './abstract.js';

const createStatSectionTemplate = () => (`
  <section class="statistic">

  </section>
`);

export default class StatSection extends AbstractView {
  getTemplate() {
    return createStatSectionTemplate();
  }
}
