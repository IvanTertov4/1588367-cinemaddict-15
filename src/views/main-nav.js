const createFiltesrMarkup = (filters) => {
  let result = '';
  Object.values(filters).map((item) => {
    result = `${result}<a href="${item.href}" class="main-navigation__item">${item.name}`;
    if (item.count) {
      result = `${result}<span class="main-navigation__item-count">${item.count}</span>`;
    }
    result = `${result}</a>`;
  });
  return result;

};

export const createMainNavTemplate = (filters) =>
  `<nav class="main-navigation">
    <div class="main-navigation__items">${createFiltesrMarkup(filters)}</div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
