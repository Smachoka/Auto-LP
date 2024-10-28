const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");

// Show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Hide menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

/* Swiper Popular */
let swiperPopular = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto", // Corrected slidesPerView typo
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

/* Scroll Up and Scroll Button */
function scrollFunction() {
  const scrollUp = document.getElementById("scroll-up");
  const myButton = document.getElementById("myBtn");

  if (window.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
    myButton.style.display = "block";
  } else {
    scrollUp.classList.remove("show-scroll");
    myButton.style.display = "none";
  }
}
window.addEventListener("scroll", scrollFunction);

document.getElementById("myBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ScrollReveal */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 400,
});
sr.reveal(".home__title, .popular__container");
sr.reveal(".home__subtitle", { delay: 500 });
sr.reveal(".home__elec", { delay: 600 });
sr.reveal(".home__img", { delay: 800 });
sr.reveal(".home__car-data", { delay: 900, interval: 100, origin: "bottom" });
sr.reveal(".home__button", { delay: 1000, origin: "bottom" });
sr.reveal(".about__group, .offer__data", { origin: "left" });
sr.reveal(".about__data, .offer__img", { origin: "right" });
sr.reveal(".logos__content, .footer__content", { interval: 100 });

/* Reveal Services on Scroll */
document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".service");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    services.forEach((service) => {
      const serviceTop = service.getBoundingClientRect().top;
      if (serviceTop < windowHeight - 50) {
        service.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
