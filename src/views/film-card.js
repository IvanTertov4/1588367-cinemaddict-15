import dayjs from 'dayjs';
import AbstractView from './abstract.js';

const createFilmCardTemplate = (filmCard) => {
  const {filmInfo, comments} = filmCard;
  const {title, poster, totalRating, release, genre, runtime, description} = filmInfo;
  const {date} = release;
  const commentsNumber = comments.length;

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
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class FilmCard extends AbstractView {
  constructor(film) {
    super();
    this._film = film;
    this._openClickHandler = this._openClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  _openClickHandler(evt) {
    evt.preventDefault();
    this._callback.openClick();
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
}

