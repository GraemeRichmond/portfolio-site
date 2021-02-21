let y = window.scrollY;
let e = document.getElementById("a-scroll-icon");

function showScrollIcon() {
  e.style.opacity = 1;
  e.href = "#about";
  e.style.cursor = "pointer";
}

function hideScrollIcon() {
  e.style.opacity = 0;
  e.href = "javascript:void(0)";
  e.style.cursor = "default";
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
