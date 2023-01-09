const video = document.querySelector(".video");
const toggleBtn = document.querySelector(".toggleButton");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const sliders = document.querySelectorAll(".controls__slider");
// const skipBtns = document.querySelectorAll("[dta-skip]")

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
    const { currentTime, duration } = video
    let progressPercantage = (currentTime / duration) * 100
    progressBar.style.flexBasis = `${progressPercantage}%`
}
 
video.addEventListener("timeupdate", handleProgress)