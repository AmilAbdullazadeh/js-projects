const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const durTime = document.querySelector("#durTime");
const currTime = document.querySelector("#currTime");

const songs = [
  "Juice WRLD Ft Benny Blanco - Real Shit", //0
  "Lil Baby, Lil Durk ft Rodwave - Rich Off Pain", //1
  "Polo G – I Know", //2
];

let songIndex = 1;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function play() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  audio.play();
}

function pause() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

playBtn.addEventListener("click", () => {
  let isPlaying = musicContainer.classList.contains("play");
  isPlaying ? pause() : play();
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

function prevSong(event) {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  play();
}

function nextSong(event) {
  songIndex++

  if (songIndex > songs.length - 1) {
    songIndex = 0
  }

  loadSong(songs[songIndex])

  play()
}

audio.addEventListener("timeupdate", updateProgress)

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  let progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

audio.addEventListener("ended", nextSong);

