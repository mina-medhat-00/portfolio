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

  const summary = document.querySelector(".summary-section");
  const experience = document.querySelector(".experience-section");
  const technologies = document.querySelector(".technologies-section");
  const projects = document.querySelector(".projects-section");
  const contact = document.querySelector(".contact-section");

  const summaryLink = document.querySelector("#summary-link");
  const experienceLink = document.querySelector("#experience-link");
  const technologiesLink = document.querySelector("#technologies-link");
  const projectsLink = document.querySelector("#projects-link");
  const contactLink = document.querySelector("#contact-link");

  summaryLink.addEventListener("click", () => {
    summary.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  experienceLink.addEventListener("click", () => {
    experience.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  technologiesLink.addEventListener("click", () => {
    technologies.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  projectsLink.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  contactLink.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
