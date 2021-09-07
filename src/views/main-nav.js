export const createMainNavTemplate = (filters) => (
  `<nav class="main-navigation">
    <div class="main-navigation__items">${
  Object.values(filters).map((item) =>
    `<a href="#${item.href}" class="main-navigation__item">${item.name}${item.count ? `<span class="main-navigation__item-count">${item.count}</span>` : ''}</a>`).join(' ')
  }
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);

