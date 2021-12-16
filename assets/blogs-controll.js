var blogs = document.getElementsByClassName("blog-articles")
var news = document.getElementsByClassName("newest")
var filters = document.getElementsByClassName("filter")
showBlogs(0);
function showBlogs(clickedId) {
  filterControll(clickedId)
  if (clickedId == 3) {
    for (var i = 0; i <= 2; i++) {
      blogs[i].classList.remove("blogs-hidden");
      news[i].classList.add("blogs-hidden");
    }
    news[0].classList.remove("blogs-hidden");
    return
  }
  for (var k = 0; k <= 2; k++) {
    if (k == clickedId) {
      blogs[k].classList.remove("blogs-hidden");
      news[k].classList.remove("blogs-hidden");
      continue
    }
    blogs[k].classList.add("blogs-hidden");
    news[k].classList.add("blogs-hidden");
  }

}
function filterControll(clikedFilter) {
  for (var j = 0; j <= 3; j++) {
    filters[j].classList.remove("active");
    if (j == clikedFilter) {
      filters[j].classList.add("active");
    }
  }
}