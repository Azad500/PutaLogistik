// ---------------------hamburger-menu---------------------------
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinksContainer = document.querySelector(".nav-links-container");
  const xIconElement = document.querySelector(".x-icon");

  hamburger.addEventListener("click", function () {
    navLinksContainer.classList.toggle("active");
  });
  xIconElement.addEventListener("click", function () {
    navLinksContainer.classList.remove("active");
  });
});
// ---------------------animate-slide-down---------------------------
document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll(
    ".home-container div, .home-container h2, .home-container p, .about-container div, .about-container h2, .about-container p,.truck-cargo-element h2, .truck-cargo-element p"
  );
  elementsToAnimate.forEach(function (element) {
    element.classList.add("animate-slide-down");
  });
});
