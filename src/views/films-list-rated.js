import AbstractView from './abstract.js';

const createFilmListRatedTemplate = () => (
  `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container films-list__container--rated">

    </div>
  </section>`
);

export default class FilmListRated extends AbstractView{
  getTemplate() {
    return createFilmListRatedTemplate();
  }
}
