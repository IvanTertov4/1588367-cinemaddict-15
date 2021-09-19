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

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];
};

export {getRandomInteger, generateId, updateItem};
