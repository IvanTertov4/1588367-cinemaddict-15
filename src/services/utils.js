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

const render = (container, element) => {
  container.append(element);
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export {getRandomInteger, generateId, createElement, render};
