function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slide-preview-image");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" opacity-off", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " opacity-off";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  if (n == (-1) && slideIndex != 1) {
    showDivs(slideIndex += n);
  }
  if (n == 1 && slideIndex != 4) {
    showDivs(slideIndex += n);
  }
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var prev = document.getElementById('prev')
  var next = document.getElementById('next')
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  if (slideIndex == 1) {
    prev.className += " nav-disaebled";
    next.className = next.className.replace(" nav-disaebled", "");
  }
  if (slideIndex != 1 && slideIndex != 4) {
    prev.className = prev.className.replace(" nav-disaebled", "");
    next.className = next.className.replace(" nav-disaebled", "");
  }
  if (slideIndex == 4) {
    next.className += " nav-disaebled"
    prev.className = prev.className.replace(" nav-disaebled", "");
  }
  x[slideIndex - 1].style.display = "block";
}