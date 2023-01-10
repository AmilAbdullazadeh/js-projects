const video = document.querySelector(".video");
const toggleBtn = document.querySelector(".toggleButton");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const sliders = document.querySelectorAll(".controls__slider");
const skipBtns = document.querySelectorAll("[data-skip]");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
    toggleBtn.innerHTML = "❚ ❚";
  } else {
    video.pause();
    toggleBtn.innerHTML = "►";
  }
}

toggleBtn.addEventListener("click", togglePlay);

function handleProgress() {
  const { currentTime, duration } = video;
  let progressPercantage = (currentTime / duration) * 100;
  progressBar.style.flexBasis = `${progressPercantage}%`;
}

video.addEventListener("timeupdate", handleProgress);

//TODO:: keydown, keyup
//TODO:: mousemove, mousedown, mouseup

document.addEventListener("keydown", (event) => {
  event.code === "Space" && togglePlay();
});

skipBtns.forEach((btn) => {
  btn.addEventListener("click", handleSkip);
});

function handleSkip() {
  video.currentTime += Number(this.dataset.skip);
}

let isMousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", () => handleMouseEvent(true));
progress.addEventListener("mousemove", (event) => isMousedown && scrub(event));
progress.addEventListener("mouseup", () => handleMouseEvent(false));

function handleMouseEvent(handleProps) {
  isMousedown = handleProps;
}

function scrub(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
