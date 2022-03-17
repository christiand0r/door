const generalInfo = ({ id, content }) => {
  const element = document.querySelector(id);

  element.insertAdjacentHTML("beforeend", content);
};

export default generalInfo;
