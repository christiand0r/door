import html2pdf from "html2pdf.js";

export default () => {
  //Clone the body
  const source = document.querySelector("body").cloneNode(true);

  //Remove animations
  source.querySelector(".code h1").classList.add("no-animated");
  source.querySelector(".code h1").style.border = 0;

  source
    .querySelectorAll(".t-icon")
    .forEach((el) => el.classList.add("no-animated"));

  //Set the breakpoints for project
  const breakProjects = Array.from(source.querySelectorAll(".project"))
    .map((project, i) => {
      const idx = i + 1;

      return idx % 3 === 0 ? `#projects-list .project:nth-child(${idx})` : null;
    })
    .filter((el) => el !== null);

  //Options for html2pf
  const options = {
    filename: "Christian-Osorio_CV.pdf",
    image: { type: "jpeg", quality: 0.95 },
    useCORS: true,
    pagebreak: {
      after: ["#projects .container"],
    },
    html2canvas: {
      scale: 3,
      letterRendering: true,
      ignoreElements(element) {
        if (element.id === "button-pdf") return true;
      },
    },
    jsPDF: { unit: "in", format: "a3", orientation: "portrait" },
  };

  html2pdf()
    .set(options)
    .from(source)
    .save()
    .catch((error) => console.log(error));
};
