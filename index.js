// ---------------------hamburger-menu---------------------------
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinksContainer = document.querySelector(".nav-links-container");
  const xIconElement = document.querySelector(".x-icon");
  const removePage = document.querySelectorAll(".removePage");

  hamburger.addEventListener("click", function () {
    navLinksContainer.classList.toggle("active");
  });
  xIconElement.addEventListener("click", function () {
    navLinksContainer.classList.remove("active");
  });
  removePage.forEach(function (element) {
    element.addEventListener("click", function () {
      navLinksContainer.classList.remove("active");
    });
  });
});
// ---------------------animate-slide-down---------------------------
document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll(
    ".home-container div, .home-container h2, .home-container p,.about-us-button, .about-container h2, .about-container p,.truck-cargo-element h2, .truck-cargo-element p,.truck-element h2,.truck-element p,.services-element h2,.services-element h3,.services-element p,.customer-element h2,.customer-element p,.contact-container h2,.contact-container p,.contact-container img"
  );
  elementsToAnimate.forEach(function (element) {
    element.classList.add("animate-slide-down");
  });
});
