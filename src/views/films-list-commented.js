import AbstractView from './abstract.js';
const createFilmListСommentedTemplate = () => (
  `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
    <div class="films-list__container films-list__container--commented">

    </div>
  </section>`
);

export default class FilmListСommented extends AbstractView{
  getTemplate() {
    return createFilmListСommentedTemplate();
  }
}
