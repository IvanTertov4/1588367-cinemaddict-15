import {createFilmCardTemplate} from './views/film-card.js';
import {createFilmsListTemplate} from './views/films-list.js';
import {createFilmsShowMoreBtnTemplate} from './views/films-show-more-btn.js';
import {createFilmListСommentedTemplate} from './views/films-list-commented.js';
import {createFilmListRatedTemplate} from './views/films-list-rated.js';
import {createFilmsSectionTemplate} from './views/films-section.js';
import {createFooterStatTemplate} from './views/footer-stat.js';
import {createSortingNavTemplate} from './views/sorting-nav.js';
import {createUserProfileTemplate} from './views/user-profile.js';
import {createInfoPopupTemplate} from './views/info-popup.js';
import {createMainNavTemplate} from './views/main-nav.js';

const CARD_COUNT = 5;
const CARD_TOP_COUNT = 2;

const bodyPlace = document.body;
const headerPlace = bodyPlace.querySelector('.header');
const mainPlace = bodyPlace.querySelector('.main');
const footerStatisticsPlace = bodyPlace.querySelector('.footer__statistics');

const renderComponent = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const renderCards = (amount, place) => {
  for (let i = 0; i < amount; i++) {
    renderComponent(place, createFilmCardTemplate());
  }
};

renderComponent(headerPlace, createUserProfileTemplate());
renderComponent(mainPlace, createMainNavTemplate());
renderComponent(footerStatisticsPlace, createFooterStatTemplate());
renderComponent(mainPlace, createSortingNavTemplate());
renderComponent(mainPlace, createFilmsSectionTemplate());
const filmSection = bodyPlace.querySelector('.films');
renderComponent(filmSection, createFilmsListTemplate());
const filmList = filmSection.querySelector('.films-list');
const filmContForCards = filmList.querySelector('.films-list__container');
renderCards(CARD_COUNT, filmContForCards);
renderComponent(filmList, createFilmsShowMoreBtnTemplate());
renderComponent(filmSection, createFilmListRatedTemplate());
const filmListRated = filmSection.querySelector('.films-list__container--rated');
renderCards(CARD_TOP_COUNT, filmListRated);
renderComponent(filmSection, createFilmListСommentedTemplate());
const filmListСommented = filmSection.querySelector('.films-list__container--commented');
renderCards(CARD_TOP_COUNT, filmListСommented);
renderComponent(bodyPlace, createInfoPopupTemplate());
