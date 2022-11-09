import SwipeCarousel from "./carousel-swipe.js";

const slider = new SwipeCarousel({
  containerID: "#carousel",
  sliderID: ".slide",
  interval: 2000,
  isPlaying: true,
});

slider.init();
