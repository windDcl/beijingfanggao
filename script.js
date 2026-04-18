const slides = Array.from(document.querySelectorAll(".hero-slide"));
const introMask = document.querySelector(".intro-mask");

let activeIndex = 0;

function renderSlide(index) {
  activeIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeIndex);
  });

  document.body.classList.toggle(
    "is-dark",
    slides[activeIndex].dataset.tone === "dark"
  );
}

window.addEventListener("load", () => {
  renderSlide(0);

  window.setTimeout(() => {
    introMask.classList.add("is-revealing");
  }, 1650);

  window.setTimeout(() => {
    introMask.classList.add("is-hidden");
  }, 2750);
});
