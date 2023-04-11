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
	getScrollElement();
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

// Terminal Animation


function terminal() {
	var container = document.getElementById("container");
	var text = '\/\/ life motto\ninherit(thePast);\nfunction overcome(entity)\n{\n experience(entity);\n for (var obj in entity) {understand(obj);}\n if (sad() === true) {\n  sad().stop();\n  beAwesome();\n }\n struggle(entity);\n}\novercome(thePresent); _\ntowards(theFuture);';
	var div = document.createElement('div');
	container.appendChild(div);
	var txt = text.split('');
	txt[60] = "&emsp;";
	var i = 0;
	(function display() {
		if(i < txt.length) {
			if (txt[i] == '_') div.innerHTML += txt[i].blink();
			else div.innerHTML += txt[i];
			++i;
			setTimeout(display, 30);
		}
	})();
	var blink_item = document.createElement('blink');
}