const photography = document.getElementById("photography");
photography.addEventListener("click", () => {
  document.querySelectorAll("#pictures div").forEach((element) => {
    element.classList.remove("hidden");
  });

  document.querySelectorAll("#pictures div").forEach((element) => {
    console.log(element.getAttribute("class"));
    if (!element.getAttribute("class").includes("photography")) {
      element.classList.add("hidden");
    }
  });
});

const biochemist = document.getElementById("biochemist");
biochemist.addEventListener("click", () => {
  document.querySelectorAll("#pictures div").forEach((element) => {
    element.classList.remove("hidden");
  });

  document.querySelectorAll("#pictures div").forEach((element) => {
    if (!element.getAttribute("class").includes("biochemist")) {
      element.classList.add("hidden");
    }
  });
});


const shearlac = document.getElementById("shearlac");
 shearlac.addEventListener("click", () => {
  document.querySelectorAll("#pictures div").forEach((element) => {
    element.classList.remove("hidden");
  });

  document.querySelectorAll("#pictures div").forEach((element) => {
    if (!element.getAttribute("class").includes("shearlac")) {
      element.classList.add("hidden");
    }
  });
});


const packaging = document.getElementById("packaging");
 packaging.addEventListener("click", () => {
  document.querySelectorAll("#pictures div").forEach((element) => {
    element.classList.remove("hidden");
  });

  document.querySelectorAll("#pictures div").forEach((element) => {
    if (!element.getAttribute("class").includes("packaging")) {
      element.classList.add("hidden");
    }
  });
});

const allPics = document.getElementById("all-pics");
 allPics.addEventListener("click", () => {
  document.querySelectorAll("#pictures div").forEach((element) => {
    element.classList.remove("hidden");
  });

  document.querySelectorAll("#pictures div").forEach((element) => {
    if (!element.getAttribute("class").includes("all-pics")) {
      element.classList.add("hidden");
    }
  });
});
