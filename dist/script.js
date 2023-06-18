/* JavaScript for Toggle Button
function toggleNavbar() {
  let navbarLinks = document.querySelector(".navbar-links");
  let toggleBtn = document.querySelector(".toggle-btn");

  navbarLinks.classList.toggle("hidden");
  toggleBtn.classList.toggle("active");
}
document.querySelector(".toggle-btn").addEventListener("click", function () {
  toggleNavbar();
});

*/ // slider
//Scroll for navbar
$(document).ready(function () {
  const navbarLinks = $(".navbar-links");
  let toggleBtn = $(".toggle-btn");
  let landingScrollPosition;

  $(window).on("load", function () {
    landingScrollPosition = $(this).scrollTop();
  });

  $(window).scroll(function () {
    const currentScrollPosition = $(this).scrollTop();

    if (currentScrollPosition > landingScrollPosition) {
      navbarLinks[0].style.display = "none";
      toggleBtn[0].style.display = "block";
    } else if (Math.abs(currentScrollPosition - landingScrollPosition) <= 1) {
      navbarLinks[0].style.display = "block";
      toggleBtn[0].style.display = "none";
    }
  });
});

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
