document.addEventListener("DOMContentLoaded", () => {
  const summary = document.querySelector(".summary-section");
  const experience = document.querySelector(".experience-section");
  const stack = document.querySelector(".stack-section");
  const projects = document.querySelector(".projects-section");
  const contact = document.querySelector(".contact-section");

  const summaryLink = document.querySelector("#summary-link");
  const experienceLink = document.querySelector("#experience-link");
  const stackLink = document.querySelector("#stack-link");
  const projectsLink = document.querySelector("#projects-link");
  const contactLink = document.querySelector("#contact-link");

  summaryLink.addEventListener("click", () => {
    summary.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  experienceLink.addEventListener("click", () => {
    experience.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  stackLink.addEventListener("click", () => {
    stack.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  projectsLink.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  contactLink.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
