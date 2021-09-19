import FilmCardView from '../views/film-card.js';
import InfoPopupView from '../views/info-popup.js';
import CommentView from '../views/comment.js';
import {render, replace, remove} from '../services/render.js';
import {bodyPlace, ESC_CODE} from '../services/constants.js';

export default class FilmCard {
  constructor(place, changedData) {
    this._place = place;
    this._changedData = changedData;

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

    this._filmCardComponent = new FilmCardView(film);
    this._infoPopupComponent = new InfoPopupView(film);

    this._filmCardComponent.setCommentsClickHandler(this._handleCommentsClick);
    this._filmCardComponent.setPosterClickHandler(this._handlePosterClick);
    this._filmCardComponent.setTitleClickHandler(this._handlerTitleClick);
    this._filmCardComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._filmCardComponent.setWatchledClickHandler(this._handleHistoryClick);
    this._filmCardComponent.setFavoriteClickHandler(this._handleHistoryClick);
    this._infoPopupComponent.setClickHandler(this._handleClsBtnClick);

    if (prevFilmCardfComponent === null || prevFilmCardfComponent === null) {
      return render(this._place, this._filmCardComponent.getElement());
    }

    if (this._place.contains(prevFilmCardfComponent.getElement())) {
      replace(this._filmCardComponent.getElement(), this._prevFilmCardfComponent.getElement());
    }

    if (this._place.contains(prevInfoPopupComponent.getElement())) {
      replace(this._infoPopupComponent.getElement(), prevInfoPopupComponent.getElement());
    }

    remove(prevFilmCardfComponent);
    remove(prevInfoPopupComponent);
  }

  destroy() {
    remove(this._filmCardComponent);
    remove(this._infoPopupComponent);
  }

  _openFilmCardInfo () {
    bodyPlace.classList.add('hide-overflow');
    bodyPlace.appendChild(this._infoPopupComponent.getElement());
    const commentsPlace = this._infoPopupComponent.getElement().querySelector('.film-details__comments-list');
    for (let i = 0; i < this._film.comments.length; i++) {
      render(commentsPlace, new CommentView(this._film, i).getElement());
    }
    document.addEventListener('keydown', this._onEscKeyDown);
  }

  _closeFilmCardInfo() {
    bodyPlace.classList.remove('hide-overflow');
    bodyPlace.removeChild(this._infoPopupComponent.getElement());
    document.removeEventListener('keydown', this._onEscKeyDown);
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
    this._changedData(
      Object.assign(
        {},
        this._film,
        {
          watchlist: !this._film.watchlist,
        },
      ),
    );
  }

  _handleHistoryClick() {
    this._changedData(
      Object.assign(
        {},
        this._film,
        {
          alreadyWatched: !this._film.alreadyWatched,
        },
      ),
    );
  }

  _handleFavouritesClick() {
    this._changedData(
      Object.assign(
        {},
        this._film,
        {
          favorite: !this._film.favorite,
        },
      ),
    );
  }
}

