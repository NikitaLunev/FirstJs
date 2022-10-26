const slides = document.querySelectorAll(".slide");
const pauseButton = document.querySelector("#pause");
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide active";
}

function pausePlayHandler() {}

pauseButton.addEventListener("click", handler);

setInterval(nextSlide, 2000);
