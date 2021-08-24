import { getRandomInteger } from '../services/random-integer';

export const createFooterStatTemplate = () => {
  const moviesInside = getRandomInteger(100,1000);

  return `
   <p>${moviesInside} movies inside</p>
  `;
};
