//Navbar
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
//Smooth Scroll

//nav links
$(".overlay-content a").on("click", function (e) {
  e.preventDefault();

  const href = $(this).attr("href");

  $("html, body").animate({ scrollTop: $(href).offset().top }, 1000);
});

//footer links
$(".quick-links a").on("click", function (e) {
  e.preventDefault();

  const href = $(this).attr("href");

  $("html, body").animate({ scrollTop: $(href).offset().top }, 1000);
});

//reveal
function reveal() {
  let reveals = $(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      $(reveals[i]).addClass("active"); // Wrap DOM element with $() to create a jQuery object
    } else {
      $(reveals[i]).removeClass("active"); // Wrap DOM element with $() to create a jQuery object
    }
  }
}

$(window).scroll(reveal);

//Swiper
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

//Form

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

window.onpopstate = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
