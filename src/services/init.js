import {renderComp} from './render-component.js';
import {headerPlace, mainPlace, footerStatisticsPlace} from './page-places';
import {createFilmCardTemplate} from '../views/film-card.js';
import {createFilmsListTemplate} from '../views/films-list.js';
import {createFilmsListBtnTemplate} from '../views/films-list-btn.js';
import {createFilmListСommentedTemplate} from '../views/films-list-commented.js';
import {createFilmListRatedTemplate} from '../views/films-list-rated.js';
import {createFilmsSectionTemplate} from '../views/films-section.js';
import {createFooterStatTemplate} from '../views/footer-stat.js';
import {createSortingNavTemplate} from '../views/sorting-nav.js';
import {createUserSideTemplate} from '../views/user-side.js';
import {createInfoPopupTemplate} from '../views/info-popup.js';
import {createMainNavTemplate} from '../views/main-nav.js';

const CARD_COUNT = 5;
const CARD_TOP_COUNT = 2;

renderComp(headerPlace, createUserSideTemplate(),'beforeend');
renderComp(mainPlace, createMainNavTemplate(),'beforeend');
renderComp(footerStatisticsPlace, createFooterStatTemplate(),'beforeend');
renderComp(mainPlace, createSortingNavTemplate(),'beforeend');
renderComp(mainPlace, createFilmsSectionTemplate(),'beforeend');
const filmSection = document.querySelector('.films');
renderComp(filmSection, createFilmsListTemplate(),'beforeend');
const filmList = document.querySelector('.films-list');
const filmContForCards = document.querySelector('.films-list__container');
for (let i = 0; i < CARD_COUNT; i++) {
  renderComp(filmContForCards, createFilmCardTemplate(),'beforeend');
}
renderComp(filmList, createFilmsListBtnTemplate(),'beforeend');
renderComp(filmSection, createFilmListRatedTemplate(),'beforeend');
const filmListRated = document.querySelector('.films-list__container--rated');
for (let i = 0; i < CARD_TOP_COUNT; i++) {
  renderComp(filmListRated, createFilmCardTemplate(),'beforeend');
}
renderComp(filmSection, createFilmListСommentedTemplate(),'beforeend');
const filmListСommented = document.querySelector('.films-list__container--commented');
for (let i = 0; i < CARD_TOP_COUNT; i++) {
  renderComp(filmListСommented, createFilmCardTemplate(),'beforeend');
}
const popupPlace = document.querySelector('.page');
renderComp(popupPlace, createInfoPopupTemplate(),'beforeend');

