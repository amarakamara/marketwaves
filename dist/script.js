//Variables

const navbarLinks = $(".navbar-links");
const toggleBtn = $(".toggle-btn");
const navBar = $(".navbar");

// JavaScript for Toggle Button
function toggleNavbar() {
  navbarLinks[0].classList.toggle("hidden");
  toggleBtn[0].classList.toggle("active");
}

function changeNav() {
  navBar[0].classList.toggle("old-navbar");
  navBar[0].classList.toggle("new-navbar");
}

document.querySelector(".toggle-btn").addEventListener("click", function () {
  toggleNavbar();
  changeNav();
});

// slider
//
//
//
//
//Scroll for navbar
$(document).ready(function () {
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
