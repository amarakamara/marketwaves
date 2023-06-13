// JavaScript for Toggle Button
function toggleNavbar() {
  let navbarLinks = document.querySelector(".navbar-links");
  let toggleBtn = document.querySelector(".toggle-btn");

  navbarLinks.classList.toggle("hidden");
  toggleBtn.classList.toggle("active");
}

document.querySelector(".toggle-btn").addEventListener("click", function () {
  toggleNavbar();
});

// slider

