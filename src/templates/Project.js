import fisherYates from "../helpers/fisherYates";

export const Project = (projects = []) => {
  //Mix Project for random order in the DOM
  const mixedProjects = fisherYates(projects);

  const fragment = new DocumentFragment();
  const $projectsList = document.getElementById("projects-list");
  const $projectTemplate = document.getElementById("project-template").content;

  mixedProjects.forEach(
    ({ color, description, image, name, site, team, technologies, type }) => {
      const $project = $projectTemplate.cloneNode(true);

      //Data attributes
      $project.querySelector(".project").dataset.tp = type;
      $project.querySelector(".project").dataset.technologies =
        technologies.join(" ");

      //Image
      $project.querySelector(".image").style.backgroundColor = color
        ? color
        : null;
      $project.querySelector(".image img").src = `./assets/projects/${image}`;

      //Title
      $project.querySelector(".name a").innerHTML = name;

      //Site
      $project.querySelector(".name a").href = site;

      //Description
      $project.querySelector(".description").innerHTML = description;

      //Team
      $project.querySelector(".team").innerHTML = `Equipo: ${
        team ? "Si" : "No"
      }`;

      //Tags
      technologies.forEach((tech) => {
        //Create paragraph for the tag
        const $tag = document.createElement("p");

        //Add class 'tag' and name of tech
        $tag.classList.add(`tag`);
        $tag.classList.add(tech.toLowerCase());

        //Insert name
        $tag.innerHTML = tech;

        $project
          .querySelector(".tags")
          .insertAdjacentElement("beforeend", $tag);
      });

      //Insert in the Fragment
      fragment.append($project);
    }
  );

  //Insert in the DOOM
  $projectsList.append(fragment);
};
