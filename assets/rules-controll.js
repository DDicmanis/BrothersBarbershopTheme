var lateModal = document.getElementById("lateModal");
var cancelModal = document.getElementById("cancelModal");
var noshowModal = document.getElementById("noshowModal");
// Get the button that opens the modal
var latebtn = document.getElementById("latebtn");
var cancelbtn = document.getElementById("cancelbtn");
var noshowbtn = document.getElementById("noshowbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
latebtn.onclick = function () {
  lateModal.style.display = "block";
  disableScroll();
}
cancelbtn.onclick = function () {
  cancelModal.style.display = "block";
  disableScroll();
}
noshowbtn.onclick = function () {
  noshowModal.style.display = "block";
  disableScroll();
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function () {
  lateModal.style.display = "none";
  enableScroll();
}
span[1].onclick = function () {
  cancelModal.style.display = "none";
  enableScroll();
}
span[2].onclick = function () {
  noshowModal.style.display = "none";
  enableScroll();
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
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