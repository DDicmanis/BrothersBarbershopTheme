document.getElementById('values-play').onclick = function () {
  document.getElementById('valuesOverlay').classList.add("hidden");
  document.getElementById('valuesVideo').play();
};
document.getElementById('valuesVideo').onclick = function () {
  document.getElementById('valuesVideo').pause();
  document.getElementById('valuesOverlay').classList.remove("hidden");
}