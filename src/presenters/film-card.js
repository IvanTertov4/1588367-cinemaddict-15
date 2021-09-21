import FilmCardView from '../views/film-card.js';
import InfoPopupView from '../views/info-popup.js';
import CommentView from '../views/comment.js';
import {render, replace, remove} from '../services/render.js';
import {bodyPlace, ESC_CODE, mode} from '../services/constants.js';

export default class FilmCard {
  constructor(place, changeData, changeMode) {
    this._place = place;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._mode = mode.DEFAULT;

    this._filmCardComponent = null;
    this._infoPopupComponent = null;

    this._handlePosterClick = this._handlePosterClick.bind(this);
    this._handlerTitleClick = this._handlerTitleClick.bind(this);
    this._handleCommentsClick = this._handleCommentsClick.bind(this);
    this._handleClsBtnClick = this._handleClsBtnClick.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);

    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleHistoryClick = this._handleHistoryClick.bind(this);
    this._handleFavouritesClick = this._handleFavouritesClick.bind(this);
  }

  init(film) {
    this._film = film;

    const prevFilmCardfComponent = this._filmCardComponent;
    const prevInfoPopupComponent = this._infoPopupComponent;

    this._filmCardComponent = new FilmCardView(this._film);
    this._infoPopupComponent = new InfoPopupView(this._film);

    this._filmCardComponent.setCommentsClickHandler(this._handleCommentsClick);
    this._filmCardComponent.setPosterClickHandler(this._handlePosterClick);
    this._filmCardComponent.setTitleClickHandler(this._handlerTitleClick);

    this._filmCardComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._filmCardComponent.setWatchedClickHandler(this._handleHistoryClick);
    this._filmCardComponent.setFavoriteClickHandler(this._handleFavouritesClick);

    this._infoPopupComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._infoPopupComponent.setFavoriteClickHandler(this._handleFavouritesClick);
    this._infoPopupComponent.setWatchedClickHandler(this._handleHistoryClick);
    this._infoPopupComponent.setClickHandler(this._handleClsBtnClick);

    if (prevFilmCardfComponent === null || prevFilmCardfComponent === null) {
      return render(this._place, this._filmCardComponent.getElement());
    }

    if (this._mode === mode.DEFAULT) {
      replace(this._filmCardComponent, prevFilmCardfComponent);
    }

    if (this._mode === mode.OPEN) {
      replace(this._infoPopupComponent, prevInfoPopupComponent);
    }

    remove(prevFilmCardfComponent);
    remove(prevInfoPopupComponent);
  }

  destroy() {
    remove(this._filmCardComponent);
    remove(this._infoPopupComponent);
  }

  resetView() {
    if (this._mode !== mode.DEFAULT) {
      this._closeFilmCardInfo();
    }
  }

  _openFilmCardInfo () {
    bodyPlace.classList.add('hide-overflow');
    bodyPlace.appendChild(this._infoPopupComponent.getElement());
    const commentsPlace = this._infoPopupComponent.getElement().querySelector('.film-details__comments-list');
    for (let i = 0; i < this._film.comments.length; i++) {
      render(commentsPlace, new CommentView(this._film, i).getElement());
    }
    document.addEventListener('keydown', this._onEscKeyDown);
    this._changeMode();
    this._mode = mode.OPEN;
  }

  _closeFilmCardInfo() {
    bodyPlace.classList.remove('hide-overflow');
    bodyPlace.removeChild(this._infoPopupComponent.getElement());
    document.removeEventListener('keydown', this._onEscKeyDown);
    this._mode = mode.DEFAULT;
  }

  _onEscKeyDown(evt) {
    if (evt.key === ESC_CODE) {
      evt.preventDefault();
      this._closeFilmCardInfo();
    }
  }

  _handlerTitleClick() {
    this._openFilmCardInfo();
  }

  _handlePosterClick() {
    this._openFilmCardInfo();
  }

  _handleCommentsClick() {
    this._openFilmCardInfo();
  }

  _handleClsBtnClick() {
    this._closeFilmCardInfo();
  }

  _handleWatchlistClick() {
    this._changeData({
      ...this._film,
      userDetails: {...this._film.userDetails, watchlist: !this._film.watchlist},
    });
  }

  _handleHistoryClick() {
    this._changeData({
      ...this._film,
      userDetails: {...this._film.userDetails, alreadyWatched: !this._film.alreadyWatched},
    });
  }

  _handleFavouritesClick() {
    const newData = {
      ...this._film,
      userDetails: {...this._film.userDetails, favorite: !this._film.favorite},
    };
    this._changeData(newData);
  }

}

