window.onscroll = function () { myFunction() };
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var lastScrollTop = 0;
var winX = null;
var winY = null;
var drawer = false;
class DomUtils {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  static keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  static preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  static preventDefaultForScrollKeys(e) {
    if (DomUtils.keys[e.keyCode]) {
      DomUtils.preventDefault(e);
      return false;
    }
  }

  static disableScroll() {
    document.addEventListener('wheel', DomUtils.preventDefault, {
      passive: false,
    }); // Disable scrolling in Chrome
    document.addEventListener('keydown', DomUtils.preventDefaultForScrollKeys, {
      passive: false,
    });
  }

  static enableScroll() {
    document.removeEventListener('wheel', DomUtils.preventDefault, {
      passive: false,
    }); // Enable scrolling in Chrome
    document.removeEventListener(
      'keydown',
      DomUtils.preventDefaultForScrollKeys,
      {
        passive: false,
      }
    ); // Enable scrolling in Chrome
  }
}
function preventDefault(e) {
  e.preventDefault();
}

function disableScroll() {
  document.body.addEventListener('touchmove', preventDefault, { passive: false });
  document.addEventListener('wheel', DomUtils.preventDefault, { passive: false });
}
function enableScroll() {
  document.body.removeEventListener('touchmove', preventDefault, { passive: false });
  document.removeEventListener('wheel', DomUtils.preventDefault, { passive: false });
}
var languge = document.querySelector(".header .language-heading")
var navLi = document.querySelectorAll(".header .header-inline li a")
myFunction()
function myFunction() {
  var burgerWhite = document.getElementById("whiteBurger")
  var burgerBlack = document.getElementById("blackBurger")
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop && st > 500) {
    header.classList.remove("transition")
    // header.style.display = "none"
    header.style.visibility = "hidden"
    header.style.opacity = "0"
    burgerWhite.style.display = "none"
    languge.style.color = "black"
    burgerBlack.style.display = "block"
    navLi[0].style.color = "black"
    navLi[1].style.color = "black"
  } else {
    header.classList.add("transition")
    // header.style.display = "flex"
    header.style.visibility = "visible"
    header.style.opacity = "1"

  }
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");

  } else {
    header.classList.remove("sticky");
    if (window.location.pathname === '/') {
      burgerWhite.style.display = "block"
      burgerBlack.style.display = "none"
      languge.style.color = "white"
      navLi[0].style.color = "white"
      navLi[1].style.color = "white"

    } else {
      burgerWhite.style.display = "none"
      burgerBlack.style.display = "block"
      languge.style.color = "black"
      navLi[0].style.color = "black"
      navLi[1].style.color = "black"
    }

  }
  lastScrollTop = st <= 0 ? 0 : st;
}
function openNav() {
  drawer = true;
  disableScroll();
  if (window.innerWidth < 915) {
    document.getElementById("drawer").style.width = "100%";
    document.getElementById("drawer").style.padding = "25px 20px 0px 0px";
  } else {
    document.getElementById("drawer").style.width = "40%";
    document.getElementById("drawer").style.padding = "20px 140px 0px 0px";
  }

}

function closeNav() {
  drawer = false;
  enableScroll();
  document.getElementById("drawer").style.width = "0";
  document.getElementById("drawer").style.padding = "0";
}
