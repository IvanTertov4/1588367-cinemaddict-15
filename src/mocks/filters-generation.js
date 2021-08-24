const isWatchList = (film) => {
  if (film.userDetails.watchlist === true) {
    return true;
  } else {
    return false;
  }
};

const isHistory = (film) => {
  if (film.userDetails.alreadyWatched === true) {
    return true;
  } else {
    return false;
  }
};

const isFavourite = (film) => {
  if (film.userDetails.favorite === true) {
    return true;
  } else {
    return false;
  }
};

const filmsToFilterMap = {
  Watchlist: (films) => films.filter((film) => isWatchList(film)).length,
  History: (films) => films.filter((film) => isHistory(film)).length,
  Favourites: (films) => films.filter((film) => isFavourite(film)).length,
};

const createFilterData = (films) => Object.entries(filmsToFilterMap).map(
  ([filterName, countFilms]) => ({
    name: filterName,
    count: countFilms(films),
  }),
);

export {createFilterData};

