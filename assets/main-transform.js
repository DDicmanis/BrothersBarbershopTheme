const slider = document.getElementsByClassName('slides');
const before = document.getElementsByClassName('beforeImage');
const after = document.getElementsByClassName('afterImage');
const resizer = document.getElementsByClassName('resizer');
var slideIndex = 1;
let active = false;
document.addEventListener("DOMContentLoaded", function () {
  let width = slider[slideIndex - 1].offsetWidth;
  let height = slider[slideIndex - 1].offsetHeight;

  for (let i = 0; i <= 2; i++) {
    var beforeImage = before[i].getElementsByTagName('img')[0];
    var afterImage = after[i].getElementsByTagName('img')[0];
    beforeImage.style.width = width + 'px';
    beforeImage.style.height = '100%';
    afterImage.style.width = width + 'px';
    afterImage.style.height = '100%';
  }

}, { passive: false });

window.addEventListener('resize', function () {
  let width = slider[slideIndex - 1].offsetWidth;
  let height = slider[slideIndex - 1].offsetHeight;
  resizer[0].style.left = width / 2 + "px";
  before[0].style.width = width / 2 + "px";
  resizer[1].style.left = width / 2 + "px";
  before[1].style.width = width / 2 + "px";
  resizer[2].style.left = width / 2 + "px";
  before[2].style.width = width / 2 + "px";
  for (let i = 0; i <= 2; i++) {
    var beforeImage = before[i].getElementsByTagName('img')[0];
    var afterImage = after[i].getElementsByTagName('img')[0];
    beforeImage.style.width = width + 'px';
    beforeImage.style.height = '100%';
    afterImage.style.width = width + 'px';
    beforeImage.style.height = '100%';
  }
}, { passive: false })

resizer[0].addEventListener('mousedown', function () {
  active = true;
  resizer[0].classList.add('resize');

}, { passive: false });
resizer[1].addEventListener('mousedown', function () {
  active = true;
  resizer[1].classList.add('resize');

}, { passive: false });
resizer[2].addEventListener('mousedown', function () {
  active = true;
  resizer[2].classList.add('resize');

}, { passive: false });
document.body.addEventListener('mouseup', function () {
  active = false;
  resizer[0].classList.remove('resize');
  resizer[1].classList.remove('resize');
  resizer[2].classList.remove('resize');
}, { passive: false });

document.body.addEventListener('mouseleave', function () {
  active = false;
  resizer[0].classList.remove('resize');
  resizer[1].classList.remove('resize');
  resizer[2].classList.remove('resize');
}, { passive: false });


document.body.addEventListener('mousemove', function (e) {
  if (!active) return;
  let x = e.pageX;
  x -= slider[slideIndex - 1].getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
}, { passive: false });

resizer[0].addEventListener('touchstart', function () {
  active = true;
  resizer[0].classList.add('resize');
}, { passive: false });
resizer[1].addEventListener('touchstart', function () {
  active = true;
  resizer[1].classList.add('resize');
}, { passive: false });
resizer[2].addEventListener('touchstart', function () {
  active = true;
  resizer[2].classList.add('resize');
}, { passive: false });

document.body.addEventListener('touchend', function () {
  active = false;
  resizer[0].classList.remove('resize');
  resizer[1].classList.remove('resize');
  resizer[2].classList.remove('resize');
}, { passive: false });

document.body.addEventListener('touchcancel', function () {
  active = false;
  resizer[0].classList.remove('resize');
  resizer[1].classList.remove('resize');
  resizer[2].classList.remove('resize');
}, { passive: false });

//calculation for dragging on touch devices
document.body.addEventListener('touchmove', function (e) {
  if (!active) return;
  let x;

  let i;
  for (i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider[slideIndex - 1].getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
}, { passive: false });

function slideIt(x) {
  let transform = Math.max(0, (Math.min(x, slider[slideIndex - 1].offsetWidth)));
  before[slideIndex - 1].style.width = transform + "px";
  resizer[slideIndex - 1].style.left = transform - 0 + "px";
}

//stop divs being selected.
function pauseEvent(e) {
  if (e.stopPropagation) e.stopPropagation();
  if (e.preventDefault) e.preventDefault();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}



//slider controlls

showDivs(slideIndex);

function plusDivs(n) {
  if (n == (-1) && slideIndex != 1) {
    showDivs(slideIndex += n);
  }
  if (n == 1 && slideIndex != 3) {
    showDivs(slideIndex += n);
  }

}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var prev = document.getElementsByClassName('prev-arrow')
  var next = document.getElementsByClassName('next-arrow')
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" background-white", "");
  }
  if (slideIndex == 1) {
    prev[0].className += " blured";
    prev[1].className += " blured";
    next[0].className = next[0].className.replace(" blured", "");
    next[1].className = next[1].className.replace(" blured", "");
  }
  if (slideIndex == 2) {
    prev[0].className = prev[0].className.replace(" blured", "");
    prev[1].className = prev[1].className.replace(" blured", "");
    next[0].className = next[0].className.replace(" blured", "");
    next[1].className = next[1].className.replace(" blured", "");
  }
  if (slideIndex == 3) {
    next[0].className += " blured"
    next[1].className += " blured"
    prev[0].className = prev[0].className.replace(" blured", "");
    prev[1].className = prev[1].className.replace(" blured", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " background-white";
  dots[slideIndex - 1 + 3].className += " background-white";
}