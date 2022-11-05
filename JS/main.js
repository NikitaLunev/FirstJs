// const container = document.querySelector("#carousel");
// const slides = container.querySelectorAll(".slide");
// const indicatorsContainer = container.querySelector("#indicators-container");
// const indicators = indicatorsContainer.querySelectorAll(".indicator");
// const pauseBtn = container.querySelector("#btn-pause");
// const prevBtn = container.querySelector("#btn-prev");
// const nextBtn = container.querySelector("#btn-next");

// const SLIDES_COUNT = slides.length;
// const CODE_LEFT_ARROW = "ArrowLeft";
// const CODE_RIGHT_ARROW = "ArrowRight";
// const CODE_SPACE = "Space";

// let currentSlide = 0;
// let isPlayng = true;
// let timerID = null;
// let startPosX = null;
// let endPosX = null;
// let interval = 2000;

// function gotoNth(n) {
//   slides[currentSlide].classList.toggle("active");
//   indicators[currentSlide].classList.toggle("active");
//   currentSlide = (n + SLIDES_COUNT) % SLIDES_COUNT;
//   slides[currentSlide].classList.toggle("active");
//   indicators[currentSlide].classList.toggle("active");
// }

// function gotoPrev() {
//   gotoNth(currentSlide - 1);
// }

// function gotoNext() {
//   gotoNth(currentSlide + 1);
// }

// function pause() {
//   pauseBtn.innerHTML = "Play";
//   isPlayng = false;
//   clearInterval(timerID);
// }

// function play() {
//   pauseBtn.innerHTML = "Pause";
//   isPlayng = true;
//   timerID = setInterval(gotoNext, 2000);
// }

// function pausePlay() {
//   isPlayng ? pause() : play();
// }

// function prev() {
//   gotoPrev();
//   pause();
// }

// function next() {
//   gotoNext();
//   pause();
// }

// function indicate(e) {
//   const target = e.target;

//   if (target && target.classList.contains("indicator")) {
//     pause();
//     gotoNth(+target.dataset.slideTo);
//   }
// }

// function pressKey(e) {
//   if (e.code === CODE_LEFT_ARROW) prev();
//   if (e.code === CODE_RIGHT_ARROW) next();
//   if (e.code === CODE_SPACE) pausePlay();
// }

// function swipeStart(e) {
//   if (e instanceof MouseEvent) {
//     startPosX = e.pageX;

//     return;
//   }

//   if (e instanceof TouchEvent) {
//     startPosX = e.changedTouches[0].pageX;
//   }
// }

// function swipeEnd(e) {
//   if (e instanceof MouseEvent) {
//     endPosX = e.pageX;
//   } else if (e instanceof TouchEvent) {
//     endPosX = e.changedTouches[0].pageX;
//   }

//   if (endPosX - startPosX > -100) prev();
//   if (endPosX - startPosX < 100) next();
// }

// pauseBtn.addEventListener("click", pausePlay);
// prevBtn.addEventListener("click", prev);
// nextBtn.addEventListener("click", next);
// indicatorsContainer.addEventListener("click", indicate);
// container.addEventListener("touchstart", swipeStart);
// container.addEventListener("mousedown", swipeStart);
// container.addEventListener("touchend", swipeEnd);
// container.addEventListener("mouseup", swipeEnd);
// document.addEventListener("keydown", pressKey);

// function init() {
//   initListeners();
//   timerID = setInterval(gotoNext, 2000);
// }
