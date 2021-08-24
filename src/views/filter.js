export const  createFilterTemplate = (filter) => {
  const {name, count} = filter;

  return `
    <a href="#${name}" class="main-navigation__item">${name} <span class="main-navigation__item-count">${count}</span></a>
  `;
};

