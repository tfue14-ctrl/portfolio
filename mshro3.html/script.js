function toggleDarkMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}

function toggleProjects() {
  let projects = document.getElementById("projects");

  if (projects.style.display === "none") {
    projects.style.display = "block";
  } else {
    projects.style.display = "none";
  }
}