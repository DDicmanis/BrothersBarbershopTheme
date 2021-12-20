var buttons = document.getElementsByClassName("contact-controll-wrapper")[0].children;
var panels = document.getElementsByClassName("contact-info-div");
showConact(0)
function showConact(index) {
  for (let i = 0; i < buttons.length; i++) {
    //change active button
    if (index == i) {
      buttons[i].classList.replace("contact-button-inactive", "contact-button")
      panels[i].style.display = "block"
    } else {
      buttons[i].classList.replace("contact-button", "contact-button-inactive")
      panels[i].style.display = "none"
    }
  }
}
initMap()

function initMap() {
  const uluru = { lat: 48.2060624, lng: 16.3469701 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
initMap2()
function initMap2() {
  const uluru = { lat: -25.344, lng: 131.036 };
  const map = new google.maps.Map(document.getElementById("map2"), {
    zoom: 4,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
window.addEventListener('resize', resizeMap);
function resizeMap() {
  if (window.innerWidth < 1432) {
    initMap();
    initMap2();
  }

}