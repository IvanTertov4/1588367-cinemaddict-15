import {createFilmData} from './mocks/film-data-generation.js';
import {createCommentData} from './mocks/comment-data-generation';
import {createFilterData} from './mocks/filters-generation';
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
import {createCommentsSectionTemplate} from './views/comments-section.js';
import {createCommentTemplate} from './views/commet.js';
import {createNewCommentTemplate} from './views/new-comment.js';
import {createFilterTemplate} from './views/filter.js';

const CARD_COUNT = 5;
const CARD_TOP_COUNT = 2;
const COMMENT_COUNT = 75;
const GENERATION_CARD_COUNT = 25;

const filmCardData = new Array(GENERATION_CARD_COUNT).fill().map(createFilmData);
const commentsData = new Array(COMMENT_COUNT).fill().map(createCommentData);
const filters = createFilterData(filmCardData);

const distributeData = () => {
  let counter = 0;
  for (const filmCard of filmCardData) {
    filmCard.id = counter;
    counter++;
    for (const comment of commentsData) {
      if (filmCard.id === comment.id) {
        filmCard.comments.push(comment);
      }
    }
  }
};

distributeData();

const bodyPlace = document.body;
const headerPlace = bodyPlace.querySelector('.header');
const mainPlace = bodyPlace.querySelector('.main');
const footerStatisticsPlace = bodyPlace.querySelector('.footer__statistics');

const renderComponent = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const renderCards = (container, amount, state) => {
  if (state === 'default') {
    for (let i = 0; i < amount; i++) {
      renderComponent(container, createFilmCardTemplate(filmCardData[i]));
    }
  }
  if (state === 'top-rated') {
    const sortedFilmCardData = filmCardData.sort((prevent, next) => next.filmInfo.totalRating - prevent.filmInfo.totalRating);
    for (let i = 0; i < amount; i++) {
      renderComponent(container, createFilmCardTemplate(sortedFilmCardData[i]));
    }
  }
  if (state === 'top-commented') {
    const sortedFilmCardData = filmCardData.sort((prevent, next) => next.comments.length - prevent.comments.length);
    for (let i = 0; i < amount; i++) {
      renderComponent(container, createFilmCardTemplate(sortedFilmCardData[i]));
    }
  }
};

const renderComments = (container) => {
  for (let i = 0; i < filmCardData[0].comments.length - 1; i++) {
    renderComponent(container, createCommentTemplate(filmCardData[0].comments[i]));
  }
};

const renderFilters = (container) => {
  for (let i = 0; i < 3; i++) {
    renderComponent(container, createFilterTemplate(filters[i]));
  }
};

renderComponent(headerPlace, createUserProfileTemplate());
renderComponent(mainPlace, createMainNavTemplate());
const filtersPlace = document.querySelector('.main-navigation__items');
renderFilters(filtersPlace);
renderComponent(footerStatisticsPlace, createFooterStatTemplate());
renderComponent(mainPlace, createSortingNavTemplate());
renderComponent(mainPlace, createFilmsSectionTemplate());
const filmSection = bodyPlace.querySelector('.films');
renderComponent(filmSection, createFilmsListTemplate());
const filmList = filmSection.querySelector('.films-list');
const filmContForCards = filmList.querySelector('.films-list__container');
renderCards(filmContForCards, CARD_COUNT, 'default');
renderComponent(filmList, createFilmsShowMoreBtnTemplate());
const filmsShowMoreBtn = filmList.querySelector('.films-list__show-more');
let count = 0;
filmsShowMoreBtn.onclick = () => {
  const maxcount = Math.min(count + 5, filmCardData.length);
  while (count < maxcount) {
    renderComponent(filmContForCards, createFilmCardTemplate(filmCardData[count]));
    count++;
  }
  if (count === GENERATION_CARD_COUNT) {
    filmsShowMoreBtn.classList.add('visually-hidden');
  }
};
renderComponent(filmSection, createFilmListRatedTemplate());
const filmListRated = filmSection.querySelector('.films-list__container--rated');
renderCards(filmListRated, CARD_TOP_COUNT, 'top-rated');
renderComponent(filmSection, createFilmListСommentedTemplate());
const filmListСommented = filmSection.querySelector('.films-list__container--commented');
renderCards(filmListСommented, CARD_TOP_COUNT, 'top-commented');
renderComponent(bodyPlace, createInfoPopupTemplate(filmCardData[0]));
const commnetsSectionPlace = bodyPlace.querySelector('.film-details__inner');
renderComponent(commnetsSectionPlace, createCommentsSectionTemplate(filmCardData[0]));
const conmmentsPlace = commnetsSectionPlace.querySelector('.film-details__comments-list');
renderComments(conmmentsPlace);
const newCommentPlace = commnetsSectionPlace.querySelector('.film-details__new-comment');
renderComponent(newCommentPlace, createNewCommentTemplate());
