var slideIndex = 0;
$(document).ready(function () {
  console.log("ready!");
});
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
  var parent = document.getElementsByClassName('card-wrapper')[0]
  var i;
  var x = parent.childNodes;
  console.log(parent)
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