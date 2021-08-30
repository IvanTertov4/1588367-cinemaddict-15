const filmsToFilterMap = {
  Watchlist: (films) => films.filter((film) => film.userDetails.watchlist).length,
  History: (films) => films.filter((film) => film.userDetails.alreadyWatched).length,
  Favourites: (films) => films.filter((film) => film.userDetails.favorite).length,
};

const createFilterData = (films) => Object.entries(filmsToFilterMap).map(
  ([filterName, countFilms]) => ({
    name: filterName,
    count: countFilms(films),
  }),
);

export {createFilterData};

