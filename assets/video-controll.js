

document.getElementById('play1').onclick = function () {
  document.getElementById('overlay1').classList.add("hidden");
  document.getElementById('video1').play();
};
document.getElementById('play2').onclick = function () {
  document.getElementById('overlay2').classList.add("hidden");
  document.getElementById('video2').play();
};
document.getElementById('play3').onclick = function () {
  document.getElementById('overlay3').classList.add("hidden");
  document.getElementById('video3').play();
};
document.getElementById('video1').onclick = function () {
  document.getElementById('video1').pause();
  document.getElementById('overlay1').classList.remove("hidden");
}
document.getElementById('video2').onclick = function () {
  document.getElementById('video2').pause();
  document.getElementById('overlay2').classList.remove("hidden");
}
document.getElementById('video3').onclick = function () {
  document.getElementById('video3').pause();
  document.getElementById('overlay3').classList.remove("hidden");
}
// play1.on("click", playPause(video1))
// play2.on("click", playPause(video2))
// play3.on("click", playPause(video3))
function playPause(video) {
  if (video.paused)
    video.play();
  else
    video.pause();
}