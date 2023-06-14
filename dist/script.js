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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    alert(el.classList);
  }
});
