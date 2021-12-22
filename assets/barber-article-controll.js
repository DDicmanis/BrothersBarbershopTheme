var gridwraper = document.getElementsByClassName("image-grid")[0]
var grid = gridwraper.getElementsByTagName("p")[1]
const image = grid.getElementsByTagName("img")
const length = image.length

for (i = 0; i < length; i++) {
  var imageWrapper = document.createElement("div")
  imageWrapper.setAttribute("class", "galery-image-wrapper")
  var clonedImage = document.createElement("img")
  clonedImage.setAttribute("src", image[i].getAttribute("src"))
  var imageOverlay = document.createElement("div")
  imageOverlay.setAttribute("class", "image-overlay")
  imageOverlay.innerHTML = image[i].getAttribute("alt")
  imageWrapper.appendChild(clonedImage);
  image[i].style.display = "none";
  imageWrapper.appendChild(imageOverlay);
  grid.appendChild(imageWrapper)
}
resizeHandler();
window.addEventListener('resize', resizeHandler)
function resizeHandler() {
  if (window.innerWidth < 990) {
    var imgs = document.getElementsByClassName("galery-image-wrapper")
    var imgLen = imgs.length
    if (imgLen > 3) {
      for (let i = 3; i < imgLen; i++) {
        imgs[i].style.display = "none";
      }
      var link = document.getElementsByClassName("morelink")[0]
      link.style.display = "block"
    } else {
      var link = document.getElementsByClassName("morelink")[0]
      link.style.display = "none"
    }

  } else {
    var link = document.getElementsByClassName("morelink")[0]
    link.style.display = "none"
    showBlocks()
  }
}
function showBlocks() {
  let imgs = document.getElementsByClassName("galery-image-wrapper")
  let imgLen = imgs.length
  for (let k = 0; k < imgLen; k++) {
    imgs[k].style.display = "block";
  }
}
function expand() {
  let imgs = document.getElementsByClassName("galery-image-wrapper")
  let imgLen = imgs.length
  console.log(imgs)
  for (let i = 3; i < imgLen; i++) {
    imgs[i].style.display = "block";
  }
  let link = document.getElementsByClassName("morelink")[0];
  link.style.display = "none"
}