//NAVIGATION BAR SCROLL

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

function NavScroll() {
  // Get the navbarz
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset != 0) {
    navbar.classList.add("navtransition");
  } else {
    navbar.classList.remove("navtransition");
  }
}

//DIV SCROLL ANIMATION

const scrollOffset = 100; //Minimum Space for animation

function getScrollElement() {
  scrollElement = document.querySelectorAll(".js-scroll");
}

function elementInView(el) {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  );
}

function handleScrollAnimation() {
  getScrollElement();
  scrollElement.forEach(function (element) {
    if (elementInView(element)) {
      element.classList.add("scrolled");
    } else {
      element.classList.remove("scrolled");
    }
  });
}
window.addEventListener("scroll", handleScrollAnimation);

// Email Copy

function emailCopy() {
  var copyText = "asayamikurashin@gmail.com";
  navigator.clipboard.writeText(copyText);
}

function blink_underscore() {
  // Select all elements with class "token punctuation" containing a semicolon
  var semicolonElements = document.querySelectorAll("span.token.punctuation");
  var count = 0;
  // Iterate over the NodeList and insert a blinking div after each semicolon
  semicolonElements.forEach(function (element) {
    if (element.textContent === ";") {
      count++;
      if (count === 7) {
        // Create the blinking span
        var blinkSpan = document.createElement("span");
        blinkSpan.className = "blink";
        blinkSpan.innerHTML = "_";

        // Insert the blinking span after the 5th semicolon element
        element.parentNode.insertBefore(blinkSpan, element.nextSibling);
      }
    }
  });
}
