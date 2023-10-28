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