import FilmsListView from '../views/films-list.js';
import SortingNavView from '../views/sorting-nav.js';
import NoFilmsView from '../views/no-films.js';
import FilmsSectionView from '../views/films-section.js';
import FilmListСommentedView from '../views/films-list-commented.js';
import FilmListRatedView from '../views/films-list-rated.js';
import FilmsShowMoreBtnView from '../views/films-show-more-btn.js';
import FooterStatView from '../views/footer-stat.js';
import MainNavView from '../views/main-nav.js';
import UserProfileView from '../views/user-profile.js';
import {render, remove} from '../services/render.js';
import {CARD_COUNT, CARD_TOP_COUNT, mainPlace, headerPlace, footerStatisticsPlace} from '../services/constants.js';
import { updateItem } from '../services/utils.js';
import FilmCardPresenter from './film-card.js';

//исправить датабинглинг
//исправить возможность показа только одного попапа

export default class FilmsList {
  constructor (filters) {
    this._place = mainPlace;
    this._renderedCardCount = CARD_COUNT;
    this._filmPresenter = new Map();

    this._userProfileComponent = new UserProfileView(filters.alreadyWatched.count);
    this._mainNavComponent = new MainNavView(filters);
    this._footerStatComponent = new FooterStatView();
    this._filmsSectionComponent = new FilmsSectionView();
    this._listDefaultComponent = new FilmsListView();
    this._listRatedComponent = new FilmListRatedView();
    this._listCommentedComponent = new FilmListСommentedView();
    this._sortComponent = new SortingNavView();
    this._noFilmComponent = new NoFilmsView();
    this._showMoreButton = new FilmsShowMoreBtnView();

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    this._handleFilmChange = this._handleFilmChange.bind(this);
  }

  init(films) {
    this._films = films.slice();
    render(headerPlace, this._userProfileComponent.getElement());
    render(this._place, this._mainNavComponent.getElement());
    this._renderList();
    render(footerStatisticsPlace, this._footerStatComponent);
  }

  _renderList() {
    if (this._films.length === 0) {
      this._renderNoFilms();
    } else {
      this._renderSort();
      this._renderFilmSection();
    }
  }

  _renderNoFilms() {
    render(this._place, this._noFilmComponent.getElement());
  }

  _renderSort() {
    render(this._place, this._sortComponent.getElement());
  }

  _renderFilmSection() {
    render(this._place, this._filmsSectionComponent.getElement());
    this._renderDefaultFilmsList();
    this._renderRatedFilmsList();
    this._renderCommentedFilmsList();
  }

  _renderDefaultFilmsList() {
    render( this._filmsSectionComponent.getElement(), this._listDefaultComponent.getElement());
    const filmContForCards =  this._filmsSectionComponent.getElement().querySelector('.films-list__container');
    this._renderFilms(0, Math.min(this._films.length, CARD_COUNT), filmContForCards, this._films);
    if (this._films.length > CARD_COUNT) {
      this._renderFilmsShowMoreBtn();
    }
  }

  _renderRatedFilmsList() {
    const sortedRatedFilmCardData = Array.from(this._films).sort((prevent, next) => next.filmInfo.totalRating - prevent.filmInfo.totalRating);
    render( this._filmsSectionComponent.getElement(), this._listRatedComponent.getElement());
    const filmListRated = this._listRatedComponent.getElement().querySelector('.films-list__container--rated');
    this._renderFilms(0, CARD_TOP_COUNT, filmListRated, sortedRatedFilmCardData);
  }

  _renderCommentedFilmsList() {
    const sortedСommentedFilmCardData = Array.from(this._films).sort((prevent, next) => next.comments.length - prevent.comments.length);
    render( this._filmsSectionComponent.getElement(), this._listCommentedComponent.getElement());
    const filmListСommented = this._listCommentedComponent.getElement().querySelector('.films-list__container--commented');
    this._renderFilms(0, CARD_TOP_COUNT, filmListСommented, sortedСommentedFilmCardData);
  }

  _renderFilms(from, to, container, array) {
    array.slice(from, to).forEach((film) => this._renderFilm(container, film));
  }

  _renderFilm(container, film) {
    const filmCardPresenter = new FilmCardPresenter(container, this._handleFilmChange, this._handleModeChange);
    filmCardPresenter.init(film);
    this._filmPresenter.set(film.id, filmCardPresenter);
  }

  _handleFilmChange(updatedFilm) {
    this._films = updateItem(this._films, updatedFilm);
    this._filmPresenter.get(updatedFilm.id).init(updatedFilm);
  }

  _handleModeChange() {
    this._filmPresenter.forEach((presenter) => presenter.resetView());
  }

  _clearFilmsList() {
    this._filmPresenter.forEach((presenter) => presenter.destroy());
    this._filmPresenter.clear();
    this._renderedTaskCount = CARD_COUNT;
    remove(this._showMoreButton);
  }

  _handleShowMoreButtonClick() {
    this._renderFilms(this._renderedCardCount, this._renderedCardCount + CARD_COUNT, this._filmsSectionComponent.getElement().querySelector('.films-list__container'), this._films);
    this._renderedCardCount += CARD_COUNT;

    if (this._renderedCardCount >= this._films.length) {
      remove(this._showMoreButton);
    }
  }

  _renderFilmsShowMoreBtn() {
    render(this._listDefaultComponent.getElement(), this._showMoreButton.getElement());
    this._showMoreButton.setClickHandler(this._handleShowMoreButtonClick);
  }
}
