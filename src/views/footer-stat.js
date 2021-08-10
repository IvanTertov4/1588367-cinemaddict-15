export const createFooterStatTemplate = (createRandomData) => {
  const {moviesInside} = createRandomData;

  return `
   <p>${moviesInside} movies inside</p>
  `;
};
