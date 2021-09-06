import {createFilmData} from './mocks/film-data-generation.js';
import {createFilterData} from './mocks/filters-generation.js';
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
import {createCommentTemplate} from './views/comment.js';
import {createNewCommentTemplate} from './views/new-comment.js';

import {CARD_COUNT, CARD_TOP_COUNT, GENERATION_CARD_COUNT} from './services/constants.js';

const bodyPlace = document.body;
const headerPlace = bodyPlace.querySelector('.header');
const mainPlace = bodyPlace.querySelector('.main');
const footerStatisticsPlace = bodyPlace.querySelector('.footer__statistics');

const filmCardData = new Array(GENERATION_CARD_COUNT).fill().map(createFilmData);

const filters = createFilterData(filmCardData);

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
    renderComponent(container, createCommentTemplate(filmCardData[0], i));
  }
};


renderComponent(headerPlace, createUserProfileTemplate());
renderComponent(mainPlace, createMainNavTemplate(filters));
renderComponent(footerStatisticsPlace, createFooterStatTemplate());
renderComponent(mainPlace, createSortingNavTemplate());
renderComponent(mainPlace, createFilmsSectionTemplate());
const filmSection = bodyPlace.querySelector('.films');
renderComponent(filmSection, createFilmsListTemplate());
const filmList = filmSection.querySelector('.films-list');
const filmContForCards = filmList.querySelector('.films-list__container');
renderCards(filmContForCards, CARD_COUNT, 'default');

if (filmCardData.length > CARD_COUNT) {
  let renderedCardCount = CARD_COUNT;

  renderComponent(filmList, createFilmsShowMoreBtnTemplate());

  const filmsShowMoreBtn = filmList.querySelector('.films-list__show-more');

  filmsShowMoreBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    filmCardData.slice(renderedCardCount, renderedCardCount + CARD_COUNT).forEach((film) => renderComponent(filmContForCards, createFilmCardTemplate(film)));
    renderedCardCount += CARD_COUNT;

    if (renderedCardCount >= filmCardData.length) {
      filmsShowMoreBtn.remove();
    }
  });
}

renderComponent(filmSection, createFilmListRatedTemplate());
const filmListRated = filmSection.querySelector('.films-list__container--rated');
renderCards(filmListRated, CARD_TOP_COUNT, 'top-rated');
renderComponent(filmSection, createFilmListСommentedTemplate());
const filmListСommented = filmSection.querySelector('.films-list__container--commented');
renderCards(filmListСommented, CARD_TOP_COUNT, 'top-commented');
renderComponent(bodyPlace, createInfoPopupTemplate(filmCardData[0]));
const commetsSectionPlace = bodyPlace.querySelector('.film-details__inner');
renderComponent(commetsSectionPlace, createCommentsSectionTemplate(filmCardData[0]));
const conmmentsPlace = commetsSectionPlace.querySelector('.film-details__comments-list');
renderComments(conmmentsPlace);
const newCommentPlace = commetsSectionPlace.querySelector('.film-details__new-comment');
renderComponent(newCommentPlace, createNewCommentTemplate());
