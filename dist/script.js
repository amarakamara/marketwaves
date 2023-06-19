//Variables
$(document).ready(function () {
  const closeBtn = $(".close-btn");
  const openBtn = $(".open-btn");
  const myNav = $("#myNav");

  function closeNav() {
    myNav.css("width", "0");
  }

  function openNav() {
    myNav.css("width", "100%");
  }

  closeBtn.on("click", closeNav);
  openBtn.on("click", openNav);
});

/*
const navbarLinks = $(".navbar-links");
const toggleBtn = $(".toggle-btn");
const navBar = $(".navbar");
const navDiv = $(".nav-container");
navItems = $(".nav-items");

// JavaScript for Toggle Button
function toggleNavbar() {
  navbarLinks[0].classList.toggle("active");
  toggleBtn[0].classList.toggle("active");
}

function changeNav() {
  navbarLinks[0].style.display = "block";
  //chanege container
  navDiv[0].classList.toggle("old");
  navDiv[0].classList.toggle("new");

  //chanege navbar
  navBar[0].classList.toggle("old-nav");
  navBar[0].classList.toggle("new-nav");

  //chanege navLinks
  navbarLinks[0].classList.toggle("old-links");
  navbarLinks[0].classList.toggle("new-links");

  //change nav items
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.toggle("inline");
    navItems[i].classList.toggle("block");
  }
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
*/
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
