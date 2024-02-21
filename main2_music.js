const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Mashle",
    name: "Anime",
    source:
      "https://github.com/kaizer11th/website-songs/raw/main/MASHLE_%20MAGIC%20AND%20MUSCLES%20Season%202%20-%20Opening%20FULL%20_Bling-Bang-Bang-Born_%20by%20Creepy%20Nuts%20(Lyrics).mp3",
  },
  {
    title: "Maharani",
    name: "Karun , Arpit Bala",
    source:
      "https://github.com/kaizer11th/website-songs/raw/main/Maharani%20-%20Karun%2C%20Lambo%20Drive%2C%20Arpit%20Bala%20%26%20Revo%20Lekhak%20(Official%20Music%20Video)%20_%20Qabool%20Hai.mp3",
  },
  {
    title: "Dooba",
    name: "Nanku",
    source:
      "https://github.com/kaizer11th/website-songs/raw/main/Dooba.mp3",
  },
  {
    title: "Kolaveri",
    name: "Dhanush ovb",
    source:
      "https://github.com/kaizer11th/website-songs/raw/main/3%20-%20Why%20This%20Kolaveri%20Di%20Official%20Video%20_%20Dhanush%2C%20Anirudh.mp3",
  },
  {
    title: "Better Call Saul",
    name: "u better call saul mofo",
    source:
      "https://github.com/kaizer11th/website-songs/raw/main/Better%20Call%20Saul%20Main%20Title%20Theme%20(Extended).mp3",
  },

  {
    title: "Jabra",
    name: "idk bro",
    source:
      "https://github.com/kaizer11th/website-songs/raw/main/Jabra%20Fan%20Song%20_%20Shah%20Rukh%20Khan%20_%20Nakash%20Aziz%20_%20Vishal%20and%20Shekhar%20_%20Varun%20Grover%20_%20SRK%20Fan%20Song.mp3",
  },
  {
    title: "Gangam Style",
    name: "PSY",
    source:
      "https://github.com/kaizer11th/website-songs/raw/main/PSY%20-%20GANGNAM%20STYLE(%EA%B0%95%EB%82%A8%EC%8A%A4%ED%83%80%EC%9D%BC)%20M_V.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

// Inspiration: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching
