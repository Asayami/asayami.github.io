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

//DIV SCROLL ANIMATION

const scrollOffset = 100; //Minimum Space for animation

function getScrollElement() {
    scrollElement = document.querySelectorAll(".js-scroll");
}

function elementInView(el) {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
    );
};

function handleScrollAnimation() {
    scrollElement.forEach(function(element) {
        if (elementInView(element)) {
            element.classList.add('scrolled');
        } else {
            element.classList.remove('scrolled');
        }
    })
}
window.addEventListener('scroll', handleScrollAnimation);
   
// Email Copy

function emailCopy() {
    var copyText = "asayamikurashin@gmail.com";
    navigator.clipboard.writeText(copyText);
}