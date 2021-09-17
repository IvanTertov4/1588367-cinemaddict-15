import dayjs from 'dayjs';

import AbstractView from './abstract.js';

import {createCommentData} from '../mocks/comment-data-generation.js';

import {COMMENT_COUNT} from '../services/constants.js';

const commentData = new Array(COMMENT_COUNT).fill().map(createCommentData);

const findComments = (film) => {
  const neededComments = [];
  for (const commentId of film.comments) {
    for (let i = 0; i < commentData.length - 1; i++) {
      if (commentId === commentData[i].id) {
        neededComments.push(commentData[i]);
      }
    }
  }
  return neededComments;
};

const createCommentTemplate = (film, number) => {
  const neededComments = findComments(film);
  const {author, commentText, date, emotion} = neededComments[number];
  return `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
  </span>
  <div>
    <p class="film-details__comment-text">${commentText}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${author}</span>
      <span class="film-details__comment-day">${dayjs(date).format('YYYY/MM/DD hh:mm')}</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
  </li>`;

};

export default class Comment extends AbstractView {
  constructor(film, number) {
    super();
    this._number = number;
    this._film = film;
  }

  getTemplate() {
    return createCommentTemplate(this._film, this._number);
  }

}
