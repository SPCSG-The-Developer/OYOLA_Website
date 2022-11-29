const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");
const slide4 = document.querySelector("#slide4");
const slide5 = document.querySelector("#slide5");
const slideBetween23 = document.querySelector("#slide2_3");

const slide4Video = document.getElementById("slide4Video");

const forwardBtn = document.querySelector("#forwardBtn");
const backwardBtn = document.querySelector("#backwardBtn");

let currentSlide = 1;

displaySlideFunction(1);

setInterval(moveForward, 12000);

forwardBtn.addEventListener('click', moveForward);
backwardBtn.addEventListener('click', moveBackward);

function moveForward() {
    if (currentSlide == 6) {
        currentSlide = 1;
    } else {
        currentSlide++;
    }
    displaySlideFunction(currentSlide);
}
function moveBackward() {
    if (currentSlide == 1) {
        currentSlide = 6;
    } else {
        currentSlide--;
    }
    displaySlideFunction(currentSlide)
}

function displaySlideFunction(index) {
    switch (index) {
        case 1:
            slide1.style.display = "block";
            slide2.style.display = "none";
            slide3.style.display = "none";
            slide4.style.display = "none";
            slide5.style.display = "none";
            slideBetween23.style.display = "none";
            slide4Video.pause()
            break;
        case 2:
            slide1.style.display = "none";
            slide2.style.display = "block";
            slide3.style.display = "none";
            slide4.style.display = "none";
            slide5.style.display = "none";
            slideBetween23.style.display = "none";
            slide4Video.pause()
            break;
        case 3:
            slide1.style.display = "none";
            slide2.style.display = "none";
            slide3.style.display = "none";
            slide4.style.display = "none";
            slide5.style.display = "none";
            slideBetween23.style.display = "block";
            slide4Video.pause()
            break;
        case 4:
            slide1.style.display = "none";
            slide2.style.display = "none";
            slide3.style.display = "none";
            slide4.style.display = "block";
            slide5.style.display = "none";
            slideBetween23.style.display = "none";
            let x = window.matchMedia("(max-width: 430px)");
            function playVideo(x) {
                if (x.matches) {
                    slide4Video.play();
                } else {
                    slide4Video.pause();
                }
            }
            playVideo(x);
            x.addEventListener(x.matches, playVideo)
            break;
        case 5:
            slide1.style.display = "none";
            slide2.style.display = "none";
            slide3.style.display = "none";
            slide4.style.display = "none";
            slide5.style.display = "block";
            slideBetween23.style.display = "none";
            slide4Video.pause()
            break;
        case 6:
            slide1.style.display = "none";
            slide2.style.display = "none";
            slide3.style.display = "block";
            slide4.style.display = "none";
            slide5.style.display = "none";
            slideBetween23.style.display = "none";
            slide4Video.pause()
            break;
    }
}
