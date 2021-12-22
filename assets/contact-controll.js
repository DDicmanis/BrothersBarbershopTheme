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
  if (index == 1) {
    initMap2();
  }
}

initMap()
var url2 = "https://www.google.com/maps/place/Brothers'+Barbershop/@48.2059329,16.3493743,18.92z/data=!3m1!5s0x476d079328443219:0xf4b7d37a8946a0c8!4m5!3m4!1s0x476d079328165a2f:0xda62389dcfc51ff4!8m2!3d48.2060493!4d16.3491734"

var url1 = "https://www.google.com/maps/place/Brothers'+Barbershop/@48.2059329,16.3493743,18.92z/data=!3m1!5s0x476d079328443219:0xf4b7d37a8946a0c8!4m5!3m4!1s0x476d079328165a2f:0xda62389dcfc51ff4!8m2!3d48.2060493!4d16.3491734"
function initMap() {
  const uluru = { lat: 48.2060624, lng: 16.3469701 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
    zoomControl: false,
    scaleControl: false,
    fullscreenControl: false,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
  marker.addListener("click", () => {
    window.open(
      "https://www.google.com/maps/place/Brothers'+Barbershop/@48.2059329,16.3493743,18.92z/data=!3m1!5s0x476d079328443219:0xf4b7d37a8946a0c8!4m5!3m4!1s0x476d079328165a2f:0xda62389dcfc51ff4!8m2!3d48.2060493!4d16.3491734", "_blank");
  });
  google.maps.event.addDomListener(window, 'resize', initMap);
}
initMap2()
function initMap2() {
  const uluru = { lat: -25.344, lng: 131.036 };
  const map = new google.maps.Map(document.getElementById("map2"), {
    zoom: 4,
    center: uluru,
    zoomControl: false,
    scaleControl: false,
    fullscreenControl: false,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
  marker.addListener("click", () => {
    window.open(
      "https://www.google.com/maps/place/Brothers'+Barbershop/@48.2059329,16.3493743,18.92z/data=!3m1!5s0x476d079328443219:0xf4b7d37a8946a0c8!4m5!3m4!1s0x476d079328165a2f:0xda62389dcfc51ff4!8m2!3d48.2060493!4d16.3491734", "_blank");
  });
  google.maps.event.addDomListener(window, 'resize', initMap);
}
// window.addEventListener('resize', resizeMap);
// function resizeMap() {
//   if (window.innerWidth < 1432) {
//     google.maps.event.trigger(map, 'resize');
//   }

// }
