// Reference the color shape that was drawn over the image
const overlay = document.getElementById("product-shape");
const overlay2 = document.getElementById("product-shape2");

// Click on a color

var el = document.getElementsByClassName("color");
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;
}

var el = document.getElementsByClassName("color2");
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor2;
}

function changeColor(e) {
  // get the hex color
  let hex = e.target.getAttribute("data-hex");
  // set the hex color
  overlay.style.fill = hex;
}

function changeColor2(e) {
  // get the hex color
  let hex = e.target.getAttribute("data-hex");
  // set the hex color
  overlay2.style.fill = hex;
}

function left() {
    document.getElementById("container").style.transform = "none";
}

function right() {
    document.getElementById("container").style.transform = "scaleX(-1)";
}


// Fullscreen Document (Apple iOS not supported)

var requestFullscreen = function (ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	} else if (ele.webkitRequestFullscreen) {
		ele.webkitRequestFullscreen();
	} else if (ele.mozRequestFullScreen) {
		ele.mozRequestFullScreen();
	} else if (ele.msRequestFullscreen) {
		ele.msRequestFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};

var exitFullscreen = function () {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};

var fsDocButton = document.getElementById('fs-doc-button');
var fsExitDocButton = document.getElementById('fs-exit-doc-button');


document.getElementById('fs-doc-button').addEventListener("click", function() {
document.documentElement.requestFullScreen();
screen.orientation.lock("portrait-primary");
}, false);

fsDocButton.addEventListener('click', function(e) {
	e.preventDefault();
	requestFullscreen(document.documentElement);
// Rotate and lock to Landscape 90??CW only in Fullscreen mode
	screen.orientation.lock('landscape-secondary');
});

fsExitDocButton.addEventListener('click', function(e) {
	e.preventDefault();
	exitFullscreen();
});

