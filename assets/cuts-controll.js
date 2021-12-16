
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
document.getElementById('play4').onclick = function () {
  document.getElementById('overlay4').classList.add("hidden");
  document.getElementById('video4').play();
};
document.getElementById('play5').onclick = function () {
  document.getElementById('overlay5').classList.add("hidden");
  document.getElementById('video5').play();
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
document.getElementById('video4').onclick = function () {
  document.getElementById('video4').pause();
  document.getElementById('overlay4').classList.remove("hidden");
}
document.getElementById('video5').onclick = function () {
  document.getElementById('video5').pause();
  document.getElementById('overlay5').classList.remove("hidden");
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



var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {

  if (n == (-1) && slideIndex != 0) {
    showDivs(slideIndex += n);
  }
  if (n == 1 && slideIndex != 4) {
    showDivs(slideIndex += n);
  }
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("video-card");
  // console.log(x)
  var prev = document.getElementById('prev')
  var next = document.getElementById('next')
  var sc = window.innerWidth;
  if (sc > 1180) {
    if (n > 2) {
      slideIndex = 2;
      return
    }
    if (n < 0) {
      slideIndex = 0;
      return
    }
    for (i = 0; i < x.length; i++) {

      if (i < n) {
        x[i].style.display = "none";
        continue
      }
      if (i > (n + 2)) {
        x[i].style.display = "none";
        continue
      }
      x[i].style.display = "block"

    }
    if (slideIndex == 0) {
      prev.classList.add("icon-disaebled")
    }
    if (slideIndex != 0 && slideIndex != 2) {
      prev.classList.remove("icon-disaebled");
      next.classList.remove("icon-disaebled");
    }
    if (slideIndex == 2) {
      next.classList.add("icon-disaebled");
    }
  } else {
    if (n > 4) {
      slideIndex = 2;
      return
    }
    if (n < 0) {
      slideIndex = 0;
      return
    }
    for (i = 0; i < x.length; i++) {

      if (i < n) {
        x[i].style.display = "none";
        continue
      }
      if (i > n) {
        x[i].style.display = "none";
        continue
      }
      x[i].style.display = "block"

    }
    if (slideIndex == 0) {
      prev.classList.add("icon-disaebled")
    }
    if (slideIndex != 0 && slideIndex != 4) {
      prev.classList.remove("icon-disaebled");
      next.classList.remove("icon-disaebled");
    }
    if (slideIndex == 4) {
      next.classList.add("icon-disaebled");
    }
  }
}

function resetSlider() {
  if (window.innerWidth < 1180) {
    showDivs(slideIndex);
  }
  if (window.innerWidth > 1180) {
    showDivs(slideIndex);
  }
}

window.onresize = resetSlider;