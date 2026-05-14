document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const themeToggle = document.querySelector("#theme-toggle");

  html.classList.add("dark");
  themeToggle.classList.remove("fa-moon");
  themeToggle.classList.add("fa-sun");

  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      themeToggle.classList.remove("fa-moon");
      themeToggle.classList.add("fa-sun");
    } else {
      themeToggle.classList.remove("fa-sun");
      themeToggle.classList.add("fa-moon");
    }
  });

  const projects = document.querySelector(".projects-section");
  const contact = document.querySelector(".contact-section");
  const projectsLink = document.querySelector("#projects-link");
  const contactLink = document.querySelector("#contact-link");

  projectsLink.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  contactLink.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
