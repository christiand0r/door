import downloadPDF from "./src/js/downloadPDF";
import { filterProjects } from "./src/js/filterProjects";
import generalInfo from "./src/js/generalInfo";
import { connectJSON } from "./src/service/connectJSON";
import { ItemContact } from "./src/templates/ItemContact";
import { Project } from "./src/templates/Project";
import { TechIcon } from "./src/templates/TechIcon";

document.addEventListener("DOMContentLoaded", async () => {
  const data = await connectJSON();

  //Generals
  generalInfo({ id: "#year", content: new Date().getFullYear() });
  generalInfo({ id: "#about-me .about", content: data["about-me"] });
  generalInfo({ id: "#exp-and-tech .experience", content: data.experience });

  //Insert Projects
  Project(data.projects);

  //Insert Contacts
  ItemContact(data.contacts);

  //Insert Tech Icons
  TechIcon(data.tecnologies);

  filterProjects();

  downloadPDF();
});
