document.addEventListener("DOMContentLoaded", () => {
  // change theme
  const body = document.body;
  const themeToggle = document.querySelector("#theme-toggle");

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
      themeToggle.classList.remove("fa-moon");
      themeToggle.classList.add("fa-sun");
    } else {
      themeToggle.classList.remove("fa-sun");
      themeToggle.classList.add("fa-moon");
    }
  });

  // scroll to view
  const projects = document.querySelector(".projects-section");
  const contact = document.querySelector(".contact-section");
  const projectsLink = document.querySelector("#projects-link");
  const contactLink = document.querySelector("#contact-link");

  projectsLink.addEventListener("click", () => {
    projects.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  contactLink.addEventListener("click", () => {
    contact.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });
});
