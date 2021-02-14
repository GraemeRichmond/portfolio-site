let y = window.scrollY;
let e = document.getElementById("a-scroll-icon");

function showScrollIcon() {
  e.className = "goto-about visible";
  return console.log(e.className);
}

function hideScrollIcon() {
  e.className = "goto-about invisible";
  return console.log(e.className);
}

window.addEventListener("load", function () {
  y = window.scrollY;

  if (y <= 0) {
    showScrollIcon();
  } else {
    hideScrollIcon();
  }
});

window.addEventListener("scroll", function () {
  y = window.scrollY;

  if (y <= 0) {
    showScrollIcon();
  } else {
    hideScrollIcon();
  }
});
