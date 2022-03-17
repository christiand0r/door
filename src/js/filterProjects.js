const filterProject = (arrHTML, keyword, dataAttribute) => {
  const getArray = Array.from(arrHTML);

  getArray.forEach((el) => {
    if (el.dataset[dataAttribute] === keyword) {
      el.classList.remove("filter");
      el.style.display = null;
    } else {
      el.classList.add("filter");
      setTimeout(() => (el.style.display = "none"), 500);
    }
  });
};

export const filterProjects = () => {
  const $switch = document.getElementById("switch-proyects");
  const $projects = document.querySelectorAll(".project");
  const $circle = document.querySelector(".switch .options .circle");

  //Observe mutations
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type !== "attributes") return;

      const { dataset } = mutation.target;

      filterProject($projects, dataset.tp, "tp");
    });
  });

  const config = { attributes: true };
  observer.observe($switch, config);

  //Change value move the circle
  document.addEventListener("change", (e) => {
    if (!e.target.matches('input[type="radio"][name="project"]')) return;
    //Only change if value is diferent
    $switch.dataset.tp === e.target.value
      ? $switch.dataset.tp
      : ($switch.dataset.tp = e.target.value);

    //When change call filterProject with dataset.tp current value as keyword
    filterProject($projects, $switch.dataset.tp, "tp");
  });

  //Click in circle change value and move the circle
  $circle.addEventListener("click", () => {
    $switch.dataset.tp === "enterprise"
      ? ($switch.dataset.tp = "personal")
      : ($switch.dataset.tp = "enterprise");
  });

  $circle.addEventListener("dblclick", () => {
    console.log("All");
    $switch.dataset.tp = "all";
  });
};
