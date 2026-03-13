// Smooth-scroll to anchor when arriving from another page: research.html#section
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

let currentSlide = 0;
let slideInterval;

function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;

  slides.forEach(slide => slide.classList.remove("active"));
  currentSlide = n;
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;

  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
  startSlideshow();
});
