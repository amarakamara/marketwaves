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

$(document).ready(function () {
  var slides = $(".testimonial-slide");
  var indicators = $(".testimonial-indicator");
  var currentSlide = 0;

  // Show initial slide and set active indicator
  slides.eq(currentSlide).addClass("active");
  indicators.eq(currentSlide).addClass("active");

  // Previous slide event
  $(".previous").click(function (e) {
    e.preventDefault();
    goToSlide(currentSlide - 1);
  });

  // Next slide event
  $(".next").click(function (e) {
    e.preventDefault();
    goToSlide(currentSlide + 1);
  });

  // Go to specific slide
  function goToSlide(index) {
    // Wrap slide index within the range of available slides
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    // Hide current slide and remove active classes
    slides.eq(currentSlide).removeClass("active");
    indicators.eq(currentSlide).removeClass("active");

    // Show new slide and add active classes
    slides.eq(index).addClass("active");
    indicators.eq(index).addClass("active");

    // Update current slide index
    currentSlide = index;
  }
});
