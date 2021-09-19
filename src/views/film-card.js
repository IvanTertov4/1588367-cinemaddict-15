import dayjs from 'dayjs';
import AbstractView from './abstract.js';

const createFilmCardTemplate = (filmCard) => {
  const {filmInfo, comments, userDetails} = filmCard;
  const {title, poster, totalRating, release, genre, runtime, description} = filmInfo;
  const {date} = release;
  const commentsNumber = comments.length;
  const {watchlist, alreadyWatched, favorite} = userDetails;

  const watchlistClass = watchlist
    ? 'film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active'
    : 'film-card__controls-item film-card__controls-item--add-to-watchlist';

  const alreadyWatchedClass = alreadyWatched
    ? 'film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active'
    : 'film-card__controls-item film-card__controls-item--mark-as-watched';

  const favoriteClass = favorite
    ? 'film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active'
    : 'film-card__controls-item film-card__controls-item--favorite';

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${totalRating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${dayjs(date).format('YYYY')}</span>
      <span class="film-card__duration">${runtime}</span>
      <span class="film-card__genre">${genre}</span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${commentsNumber} comments</a>
    <div class="film-card__controls">
      <button class="${watchlistClass}" type="button">Add to watchlist</button>
      <button class="${alreadyWatchedClass}" type="button">Mark as watched</button>
      <button class="${favoriteClass}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class FilmCard extends AbstractView {
  constructor(film) {
    super();
    this._film = film;
    this._openClickHandler = this._openClickHandler.bind(this);

    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._watchledClickHandler = this._watchedClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  _openClickHandler(evt) {
    evt.preventDefault();
    this._callback.openClick();
  }

  _watchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchlistClick();
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setPosterClickHandler(callback) {
    this._callback.openClick = callback;
    this.getElement().querySelector('.film-card__poster').addEventListener('click', this._openClickHandler);
  }

  setTitleClickHandler(callback) {
    this._callback.openClick = callback;
    this.getElement().querySelector('.film-card__title').addEventListener('click', this._openClickHandler);
  }

  setCommentsClickHandler(callback) {
    this._callback.openClick = callback;
    this.getElement().querySelector('.film-card__comments').addEventListener('click', this._openClickHandler);
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector('.film-card__controls-item--add-to-watchlist').addEventListener('click', this._watchlistClickHandler);
  }

  setWatchledClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector('.film-card__controls-item--mark-as-watched').addEventListener('click', this._watchedClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector('.film-card__controls-item--favorite').addEventListener('click', this._favoriteClickHandler);
  }
}

