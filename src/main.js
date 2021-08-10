import {createFilmData, createCommentData, createRandomData} from './mocks/generation.js';

import {createFilmCardTemplate} from './views/film-card.js';
import {createFilmsListTemplate} from './views/films-list.js';
import {createFilmsShowMoreBtnTemplate} from './views/films-show-more-btn.js';
import {createFilmListСommentedTemplate} from './views/films-list-commented.js';
import {createFilmListRatedTemplate} from './views/films-list-rated.js';
import {createFilmsSectionTemplate} from './views/films-section.js';
import {createFooterStatTemplate} from './views/footer-stat.js';
import {createSortingNavTemplate} from './views/sorting-nav.js';
import {createUserProfileTemplate} from './views/user-profile.js';
//import {createInfoPopupTemplate} from './views/info-popup.js';
import {createMainNavTemplate} from './views/main-nav.js';
import {createCommentsSectionTemplate} from './views/comments-section.js';
import {createCommentTemplate} from './views/commet.js';
import {createNewCommentTemplate} from './views/new-comment.js';

const CARD_COUNT = 5;
const CARD_TOP_COUNT = 2;
const COMMENT_COUNT = 5;
const GENERATION_CARD_COUNT = 15;

const commentsData = new Array();
const filmCardData = new Array(GENERATION_CARD_COUNT).fill().map(
  (_, index) => {
    const filmData = createFilmData();
    for (let i = 0; i < filmData.commentsCount; i++) {
      const commentData = createCommentData();
      commentsData.push({idFilm: index, ...commentData});
    }
    return {id: index, ...filmData};
  },
);

const bodyPlace = document.body;
const headerPlace = bodyPlace.querySelector('.header');
const mainPlace = bodyPlace.querySelector('.main');
const footerStatisticsPlace = bodyPlace.querySelector('.footer__statistics');

const renderComponent = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const renderNewElements = (amount, place, template, array) => {
  for (let i = 0; i < amount; i++) {
    renderComponent(place, template(array[i]));
  }
};

renderComponent(headerPlace, createUserProfileTemplate());
renderComponent(mainPlace, createMainNavTemplate(createRandomData()));
renderComponent(footerStatisticsPlace, createFooterStatTemplate(createRandomData()));
renderComponent(mainPlace, createSortingNavTemplate());
renderComponent(mainPlace, createFilmsSectionTemplate());
const filmSection = bodyPlace.querySelector('.films');
renderComponent(filmSection, createFilmsListTemplate());
const filmList = filmSection.querySelector('.films-list');
const filmContForCards = filmList.querySelector('.films-list__container');
renderNewElements(CARD_COUNT, filmContForCards, createFilmCardTemplate, filmCardData);
renderComponent(filmList, createFilmsShowMoreBtnTemplate());
const filmsShowMoreBtn = filmList.querySelector('.films-list__show-more');
filmsShowMoreBtn.onclick = () => {
  let counter = GENERATION_CARD_COUNT;
  if (counter >= 0 ) {
    counter = counter - 5;
    renderNewElements(CARD_COUNT, filmContForCards, createFilmCardTemplate, filmCardData);
  }
};
renderComponent(filmSection, createFilmListRatedTemplate());
const filmListRated = filmSection.querySelector('.films-list__container--rated');
renderNewElements(CARD_TOP_COUNT, filmListRated, createFilmCardTemplate, filmCardData);
renderComponent(filmSection, createFilmListСommentedTemplate());
const filmListСommented = filmSection.querySelector('.films-list__container--commented');
renderNewElements(CARD_TOP_COUNT, filmListСommented, createFilmCardTemplate, filmCardData);
//renderNewElements(1, bodyPlace, createInfoPopupTemplate, filmCardData);
const commnetsSectionPlace = bodyPlace.querySelector('.film-details__inner');
renderComponent(commnetsSectionPlace, createCommentsSectionTemplate());
const conmmentsPlace = commnetsSectionPlace.querySelector('.film-details__comments-list');
renderNewElements(COMMENT_COUNT, conmmentsPlace, createCommentTemplate, commentsData);
const newCommentPlace = commnetsSectionPlace.querySelector('.film-details__new-comment');
renderComponent(newCommentPlace, createNewCommentTemplate());
