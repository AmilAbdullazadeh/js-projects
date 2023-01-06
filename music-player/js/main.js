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
  "Juice WRLD Ft Benny Blanco - Real Shit",
  "Lil Baby, Lil Durk ft Rodwave - Rich Off Pain",
  "Polo G – I Know",
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
  isPlaying ? pause() : play()
})

