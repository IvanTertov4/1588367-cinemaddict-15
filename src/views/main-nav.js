export const createMainNavTemplate = (filters) => (
  `<nav class="main-navigation">
    <div class="main-navigation__items">
     <a href="#all" class="main-navigation__item">All movies</a>
     <a href="#${filters[0].name}" class="main-navigation__item">${filters[0].name} <span class="main-navigation__item-count">${filters[0].count}</span></a>
     <a href="#${filters[1].name}" class="main-navigation__item">${filters[1].name} <span class="main-navigation__item-count">${filters[1].count}</span></a>
     <a href="#${filters[2].name}" class="main-navigation__item">${filters[2].name} <span class="main-navigation__item-count">${filters[2].count}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);

