import {createFilmData} from './mocks/film-data-generation.js';
import {createFilterData} from './mocks/filters-generation.js';
import {render} from './services/utils.js';

import FilmCardView from './views/film-card.js';
import FilmsListView from './views/films-list.js';
import FilmListСommentedView from './views/films-list-commented.js';
import FilmListRatedView from './views/films-list-rated.js';
import FooterStatView from './views/footer-stat.js';
import MainNavView from './views/main-nav.js';
import FilmsSectionView from './views/films-section.js';
import SortingNavView from './views/sorting-nav.js';
import UserProfileView from './views/user-profile.js';
import FilmsShowMoreBtnView from './views/films-show-more-btn.js';
import InfoPopupView from './views/info-popup.js';
import CommentView from './views/comment.js';
import NoFilmsView from './views/no-films.js';

import {CARD_COUNT, CARD_TOP_COUNT, GENERATION_CARD_COUNT, ESC_CODE} from './services/constants.js';

const bodyPlace = document.body;
const headerPlace = bodyPlace.querySelector('.header');
const mainPlace = bodyPlace.querySelector('.main');
const footerStatisticsPlace = bodyPlace.querySelector('.footer__statistics');

const filmCardData = new Array(GENERATION_CARD_COUNT).fill().map(createFilmData);
const sortedRatedFilmCardData = Array.from(filmCardData).sort((prevent, next) => next.filmInfo.totalRating - prevent.filmInfo.totalRating);
const sortedСommentedFilmCardData = Array.from(filmCardData).sort((prevent, next) => next.comments.length - prevent.comments.length);
const filters = createFilterData(filmCardData);

render(headerPlace, new UserProfileView(filters.alreadyWatched.count).getElement());
render(mainPlace, new MainNavView(filters).getElement());
render(footerStatisticsPlace, new FooterStatView().getElement());
if (filmCardData.length === 0) {
  render(mainPlace, new NoFilmsView().getElement());
} else {
  render(mainPlace, new SortingNavView().getElement());
  render(mainPlace, new FilmsSectionView().getElement());
  const filmSection = bodyPlace.querySelector('.films');
  render(filmSection, new FilmsListView().getElement());
  const filmList = filmSection.querySelector('.films-list');
  const filmContForCards = filmList.querySelector('.films-list__container');

  const renderFilm = (container, film) => {
    const filmCard = new FilmCardView(film);
    const filmCardInfo = new InfoPopupView(film);

    const openFilmCardInfo = () => {
      bodyPlace.classList.add('hide-overflow');
      bodyPlace.appendChild(filmCardInfo.getElement());
      const commentsPlace = filmCardInfo.getElement().querySelector('.film-details__comments-list');
      if (commentsPlace.children.length === 0) {
        for (let i = 0; i < film.comments.length; i++) {
          render(commentsPlace, new CommentView(film, i).getElement());
        }
      }
    };

    const closeFilmCardInfo = () => {
      bodyPlace.classList.remove('hide-overflow');
      bodyPlace.removeChild(filmCardInfo.getElement());
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === ESC_CODE) {
        evt.preventDefault();
        closeFilmCardInfo();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    filmCard.getElement().querySelector('.film-card__poster').addEventListener('click', () => {
      openFilmCardInfo();
      document.addEventListener('keydown', onEscKeyDown);
    });

    filmCard.getElement().querySelector('.film-card__title').addEventListener('click', () => {
      openFilmCardInfo();
      document.addEventListener('keydown', onEscKeyDown);
    });

    filmCard.getElement().querySelector('.film-card__comments').addEventListener('click', () => {
      openFilmCardInfo();
      document.addEventListener('keydown', onEscKeyDown);
    });

    filmCardInfo.getElement().querySelector('.film-details__close-btn').addEventListener('click', () => {
      closeFilmCardInfo();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(container, filmCard.getElement());
  };

  for (let i = 0; i < CARD_COUNT; i++) {
    renderFilm(filmContForCards, filmCardData[i]);
  }

  if (filmCardData.length > CARD_COUNT) {
    let renderedCardCount = CARD_COUNT;

    render(filmList, new FilmsShowMoreBtnView().getElement());

    const filmsShowMoreBtn = filmList.querySelector('.films-list__show-more');

    filmsShowMoreBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      filmCardData.slice(renderedCardCount, renderedCardCount + CARD_COUNT).forEach((film) => renderFilm(filmContForCards, film));
      renderedCardCount += CARD_COUNT;

      if (renderedCardCount >= filmCardData.length) {
        filmsShowMoreBtn.remove();
      }
    });
  }

  render(filmSection, new FilmListRatedView().getElement());
  const filmListRated = filmSection.querySelector('.films-list__container--rated');

  for (let i = 0; i < CARD_TOP_COUNT; i++) {
    renderFilm(filmListRated, sortedRatedFilmCardData[i]);
  }

  render(filmSection, new FilmListСommentedView().getElement());
  const filmListСommented = filmSection.querySelector('.films-list__container--commented');

  for (let i = 0; i < CARD_TOP_COUNT; i++) {
    renderFilm(filmListСommented, sortedСommentedFilmCardData[i]);
  }
}

