export const TechIcon = (tecnologies = []) => {
  const fragment = new DocumentFragment();
  const $technologiesList = document.getElementById("technologies-list");
  const $techIconTemplate =
    document.getElementById("tech-icon-template").content;

  tecnologies.forEach((tech) => {
    const $techIcon = $techIconTemplate.cloneNode(true);

    $techIcon.querySelector("img").src = `./assets/${tech}.png`;

    //Insert in the Fragment
    fragment.append($techIcon);
  });

  //Insert in the DOOM
  $technologiesList.append(fragment);
};
