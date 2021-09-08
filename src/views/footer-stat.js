import { getRandomInteger } from '../services/utils.js';

export const createFooterStatTemplate = () => {
  const moviesInside = getRandomInteger(100,1000);

  return `
   <p>${moviesInside} movies inside</p>
  `;
};
