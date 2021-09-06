let idCount = 0;
const generateId = (count) => {
  for (let i = 0; i < count; i++) {
    idCount++;
    return idCount;
  }
};

export {generateId};
