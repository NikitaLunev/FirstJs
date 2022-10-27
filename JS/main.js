const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const indicatorsContainer = document.querySelector("#indicators-container");

const pauseBtn = document.querySelector("#btn-pause");
const prevBtn = document.querySelector("#btn-prev");
const nextBtn = document.querySelector("#btn-next");

const SLIDES_COUNT = slides.length;
const CODE_LEFT_ARROW = "ArrowLeft";
const CODE_RIGHT_ARROW = "ArrowRight";
const CODE_SPACE = "Space";

let currentSlide = 0;
let isPlayng = true;
let timerID = null;

function gotoNth(n) {
  slides[currentSlide].classList.toggle("active");
  indicators[currentSlide].classList.toggle("active");
  currentSlide = (n + SLIDES_COUNT) % SLIDES_COUNT;
  indicators[currentSlide].classList.toggle("active");
  slides[currentSlide].classList.toggle("active");
}

function gotoPrev() {
  gotoNth(currentSlide - 1);
}

function gotoNext() {
  gotoNth(currentSlide + 1);
}

function pause() {
  pauseBtn.innerHTML = "Play";
  isPlayng = false;
  clearInterval(timerID);
}

function play() {
  pauseBtn.innerHTML = "Pause";
  isPlayng = true;
  timerID = setInterval(gotoNext, 2000);
}

function pausePlayHandler() {
  isPlayng ? pause() : play();
}

function prev() {
  gotoPrev();
  pause();
}

function next() {
  gotoNext();
  pause();
}

function indicate(e) {
  const target = e.target;

  if (target && target.classList.contains("indicator")) {
    pause();
    gotoNth(+target.dataset.slideTo);
  }
}

function pressKey(e) {
  if (e.code === CODE_LEFT_ARROW) return prev();
  if (e.code === CODE_RIGHT_ARROW) return next();
  if (e.code === CODE_SPACE) return pausePlay();
}

pauseBtn.addEventListener("click", pausePlayHandler);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
indicatorsContainer.addEventListener("click", indicate);
document.addEventListener("keydown", pressKey);

timerID = setInterval(gotoNext, 2000);
