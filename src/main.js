import {createFilmData} from './mocks/film-data-generation.js';
import {createFilterData} from './mocks/filters-generation.js';

import FilmsListPresenter from './presenters/film-list.js';

import {GENERATION_CARD_COUNT} from './services/constants.js';

const filmCardData = new Array(GENERATION_CARD_COUNT).fill().map(createFilmData);
const filters = createFilterData(filmCardData);

const filmsListPresenter = new FilmsListPresenter(filters);
filmsListPresenter.init(filmCardData);
