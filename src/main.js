import {createFilmData} from './mocks/film-data-generation.js';
import {createFilterData} from './mocks/filters-generation.js';
import {render} from './services/render.js';
import FooterStatView from './views/footer-stat.js';
import MainNavView from './views/main-nav.js';
import UserProfileView from './views/user-profile.js';

import FilmsListPresenter from './presenters/film-list.js';

import {GENERATION_CARD_COUNT, headerPlace, mainPlace, footerStatisticsPlace} from './services/constants.js';

const filmCardData = new Array(GENERATION_CARD_COUNT).fill().map(createFilmData);
const filters = createFilterData(filmCardData);

render(headerPlace, new UserProfileView(filters.alreadyWatched.count).getElement());
render(mainPlace, new MainNavView(filters).getElement());
render(footerStatisticsPlace, new FooterStatView().getElement());
const filmsListPresenter = new FilmsListPresenter(mainPlace);
filmsListPresenter.init(filmCardData);
