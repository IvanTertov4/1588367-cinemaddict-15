let idCount = 0;
const generateId = (count) => {
  for (let i = 0; i < count; i++) {
    idCount++;
    return idCount;
  }
};

const getRandomInteger = (min, max) => {
  const randomInteger = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(randomInteger);
};

export {getRandomInteger, generateId};
