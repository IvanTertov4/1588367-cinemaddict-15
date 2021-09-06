const filmsToFilterMap = {
  watchlist: (films) => films.filter((film) => film.userDetails.watchlist).length,
  history: (films) => films.filter((film) => film.userDetails.alreadyWatched).length,
  favourites: (films) => films.filter((film) => film.userDetails.favorite).length,
};

const createFilterData = (films) => ({
  all: {
    href: '#all',
    name: 'All movies',
  },
  watchlist: {
    href: '#watchlist',
    name:'Watchlist',
    count: filmsToFilterMap.watchlist(films),
  },
  alreadyWatched: {
    href: '#history',
    name:'History',
    count: filmsToFilterMap.history(films),
  },
  favourites: {
    href: '#favourites',
    name:'Favourites',
    count: filmsToFilterMap.favourites(films),
  },
});

export {createFilterData};

