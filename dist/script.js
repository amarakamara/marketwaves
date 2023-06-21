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

//Booking Page
var video = $(".myvid");
var playBtn = $(".play-pause");
var muteBtn = $(".mute-unmute");
var play = $(".play");
var mute = $(".mute");
var unmute = $(".unmute");

$(document).ready(function () {
  video[0].muted = true;
  video[0].pause();
});

function playPause() {
  if (video[0].paused) {
    video[0].play();
    play[0].classList.remove("fa-play");
    play[0].classList.add("fa-pause");
  } else {
    video[0].pause();
    play[0].classList.remove("fa-pause");
    play[0].classList.add("fa-play");
  }
}

function muteUnmute() {
  if (video[0].muted === true) {
    video[0].muted = false;
    unmute[0].classList.remove("hidden");
    mute[0].classList.add("hidden");
  } else {
    video[0].muted = true;
    unmute[0].classList.add("hidden");
    mute[0].classList.remove("hidden");
  }
}
playBtn.on("click", playPause);
muteBtn.on("click", muteUnmute);
