import bodyToPDF from "../helpers/bodyToPDF.js";

const downloadPDF = () => {
  const buttonPDF = document.getElementById("button-pdf");
  let timer = null;

  buttonPDF.addEventListener("click", (e) => bodyToPDF());

  buttonPDF.addEventListener("mouseover", (e) => {
    setTimeout(
      () => buttonPDF.style.setProperty("transition", "3s opacity ease"),
      2000
    );

    timer = setTimeout(() => {
      buttonPDF.style.opacity = 0;
      buttonPDF.innerHTML = "Ocultando..";
    }, 3000);
  });

  buttonPDF.addEventListener("mouseleave", (e) => {
    timer ? clearTimeout(timer) : (timer = null);

    buttonPDF.style.opacity = null;
    buttonPDF.innerHTML = "Descargar en PDF";
    buttonPDF.style.setProperty("transition", null);
  });
};

export default downloadPDF;
