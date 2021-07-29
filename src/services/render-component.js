const renderComponent = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export {renderComponent};

