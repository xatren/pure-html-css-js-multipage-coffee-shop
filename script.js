/*

  Loading Gif

*/

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 1350);
}
window.onload = fadeOut();

/*

  Responsive navbar

*/

document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("navbarToggle");
  var navbarLinks = document.getElementById("navbarLinks");

  toggleButton.addEventListener("click", function () {
    navbarLinks.classList.toggle("show");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      navbarLinks.classList.remove("show");
    }
  });
});
