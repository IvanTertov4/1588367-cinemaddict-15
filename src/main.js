import {renderComponent} from './services/render-component.js';
import {createFilmCardTemplate} from './views/film-card.js';
import {createFilmsListTemplate} from './views/films-list.js';
import {createShowMoreTemplate} from './views/films-show-more-btn.js';
import {createFilmListСommentedTemplate} from './views/films-list-commented.js';
import {createFilmListRatedTemplate} from './views/films-list-rated.js';
import {createFilmsSectionTemplate} from './views/films-section.js';
import {createFooterStatTemplate} from './views/footer-stat.js';
import {createSortingNavTemplate} from './views/sorting-nav.js';
import {createUserProfileTemplate} from './views/user-side.js';
import {createInfoPopupTemplate} from './views/info-popup.js';
import {createMainNavTemplate} from './views/main-nav.js';

const CARD_COUNT = 5;
const CARD_TOP_COUNT = 2;

const headerPlace = document.querySelector('.header');
const mainPlace = document.querySelector('.main');
const footerStatisticsPlace = document.querySelector('.footer__statistics');

const renderCards = (amount, place) => {
  for (let i = 0; i < amount; i++) {
    renderComponent(place, createFilmCardTemplate(),'beforeend');
  }
};

renderComponent(headerPlace, createUserProfileTemplate(),'beforeend');
renderComponent(mainPlace, createMainNavTemplate(),'beforeend');
renderComponent(footerStatisticsPlace, createFooterStatTemplate(),'beforeend');
renderComponent(mainPlace, createSortingNavTemplate(),'beforeend');
renderComponent(mainPlace, createFilmsSectionTemplate(),'beforeend');
const filmSection = document.querySelector('.films');
renderComponent(filmSection, createFilmsListTemplate(),'beforeend');
const filmList = document.querySelector('.films-list');
const filmContForCards = filmList.querySelector('.films-list__container');
renderCards(CARD_COUNT, filmContForCards);
renderComponent(filmList, createShowMoreTemplate(),'beforeend');
renderComponent(filmSection, createFilmListRatedTemplate(),'beforeend');
const filmListRated = filmSection.querySelector('.films-list__container--rated');
renderCards(CARD_TOP_COUNT, filmListRated);
renderComponent(filmSection, createFilmListСommentedTemplate(),'beforeend');
const filmListСommented = filmSection.querySelector('.films-list__container--commented');
renderCards(CARD_TOP_COUNT, filmListСommented);
const popupPlace = document.body;
renderComponent(popupPlace, createInfoPopupTemplate(),'beforeend');

