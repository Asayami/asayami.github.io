//NAVIGATION BAR SCROLL

function NavScroll() {
  // Get the navbar
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset != 0) {
    navbar.classList.add("navtransition");
  } else {
    navbar.classList.remove("navtransition");
  }
}

function loadNavbar() {
  fetch("/clone/theme/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("themeSpace").innerHTML = data;
      document.getElementById("navbar").onscroll = NavScroll;
      window.onscroll = NavScroll;
      NavScroll();
    });
}
