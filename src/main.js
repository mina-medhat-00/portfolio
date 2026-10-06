document.addEventListener("DOMContentLoaded", () => {
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
