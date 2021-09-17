import { getRandomInteger } from '../services/utils.js';
import AbstractView from './abstract.js';

const createFooterStatTemplate = () => {
  const moviesInside = getRandomInteger(100,1000);

  return`<p>
    ${moviesInside} movies inside
  </p>`;
};

export default class FooterStat extends AbstractView {
  getTemplate() {
    return createFooterStatTemplate();
  }
}
