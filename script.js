const slides = Array.from(document.querySelectorAll(".hero-slide"));
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");
const currentSlide = document.getElementById("currentSlide");
const heroProgress = document.getElementById("heroProgress");
const introMask = document.querySelector(".intro-mask");

let activeIndex = 0;
let autoplayId = null;

function formatIndex(index) {
  return String(index + 1).padStart(2, "0");
}

function renderSlide(index) {
  activeIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeIndex);
  });

  document.body.classList.toggle(
    "is-dark",
    slides[activeIndex].dataset.tone === "dark"
  );

  currentSlide.textContent = formatIndex(activeIndex);

  const progress = (activeIndex + 1) / slides.length;
  heroProgress.style.transform = `scaleX(${progress})`;
}

function startAutoplay() {
  window.clearInterval(autoplayId);
  autoplayId = window.setInterval(() => {
    renderSlide(activeIndex + 1);
  }, 5800);
}

prevButton.addEventListener("click", () => {
  renderSlide(activeIndex - 1);
  startAutoplay();
});

nextButton.addEventListener("click", () => {
  renderSlide(activeIndex + 1);
  startAutoplay();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    renderSlide(activeIndex - 1);
    startAutoplay();
  }

  if (event.key === "ArrowRight") {
    renderSlide(activeIndex + 1);
    startAutoplay();
  }
});

window.addEventListener("load", () => {
  renderSlide(0);
  startAutoplay();

  window.setTimeout(() => {
    introMask.classList.add("is-revealing");
  }, 1650);

  window.setTimeout(() => {
    introMask.classList.add("is-hidden");
  }, 2750);
});
