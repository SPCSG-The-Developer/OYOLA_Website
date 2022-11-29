// links

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section6');

const section1subMenu = document.querySelector('#section1subMenu');
let menuFlag = false;

// blocks

const block1 = document.querySelector('#block1');
const block2 = document.querySelector('#block2');
const block3 = document.querySelector('#block3');
const block4 = document.querySelector('#block6');


const subMenu1 = document.getElementById("submenu1");
const subMenu2 = document.getElementById("submenu2");
const subMenu3 = document.getElementById("submenu3");
const subMenu4 = document.getElementById("submenu4");

const block11 = document.querySelector('#block11');
const block12 = document.querySelector('#block12');
const block13 = document.querySelector('#block13');
const block14 = document.querySelector('#block14');


section1.addEventListener('click', () => {
    if(auth.currentUser == null){return}
    section1.style.color = "#e6c762";
    section2.style.color = "#fefefe";
    section3.style.color = "#fefefe";
    section4.style.color = "#fefefe";

    menuFlag = !menuFlag;
    block1.style.display = "grid";

    if (menuFlag) {
        section1subMenu.style.display = "block";
    } else {
        section1subMenu.style.display = "none";
    }

    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "none";
});

section2.addEventListener('click', () => {
    if(auth.currentUser == null){return}
    section1.style.color = "#fefefe";
    section2.style.color = "#e6c762";
    section3.style.color = "#fefefe";
    section4.style.color = "#fefefe";

    block1.style.display = "none";
    section1subMenu.style.display = "none";
    block2.style.display = "block";
    block3.style.display = "none";
    block4.style.display = "none";
});

section3.addEventListener('click', () => {
    if(auth.currentUser == null){return}
    section1.style.color = "#fefefe";
    section2.style.color = "#fefefe";
    section3.style.color = "#e6c762";
    section4.style.color = "#fefefe";

    block1.style.display = "none";
    section1subMenu.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "block";
    block4.style.display = "none";
});


section6.addEventListener('click', () => {
    if(auth.currentUser == null){return}
    section1.style.color = "#fefefe";
    section2.style.color = "#fefefe";
    section3.style.color = "#fefefe";
    section4.style.color = "#e6c762";

    block1.style.display = "none";
    section1subMenu.style.display = "none";
    block2.style.display = "none";
    block3.style.display = "none";
    block4.style.display = "block";
});



subMenu1.addEventListener('click', () => {
    if(auth.currentUser == null){return}
    subMenu1.style.color = "#e6c762";
    subMenu2.style.color = "#fefefe";
    subMenu3.style.color = "#fefefe";
    subMenu4.style.color = "#fefefe";

    block11.style.display = "grid";
    block12.style.display = "none";
    block13.style.display = "none";
    block14.style.display = "none";
});
subMenu2.addEventListener('click', () => {
    if(auth.currentUser == null){return}
    subMenu1.style.color = "#fefefe";
    subMenu2.style.color = "#e6c762";
    subMenu3.style.color = "#fefefe";
    subMenu4.style.color = "#fefefe";

    block11.style.display = "none";
    block12.style.display = "grid";
    block13.style.display = "none";
    block14.style.display = "none";
});
subMenu3.addEventListener('click', () => {
    if(auth.currentUser == null){return}
    subMenu1.style.color = "#fefefe";
    subMenu2.style.color = "#fefefe";
    subMenu3.style.color = "#e6c762";
    subMenu4.style.color = "#fefefe";

    block11.style.display = "none";
    block12.style.display = "none";
    block13.style.display = "grid";
    block14.style.display = "none";
});
subMenu4.addEventListener('click', () => {
    if(auth.currentUser == null){return}
    subMenu1.style.color = "#fefefe";
    subMenu2.style.color = "#fefefe";
    subMenu3.style.color = "#fefefe";
    subMenu4.style.color = "#e6c762";

    block11.style.display = "none";
    block12.style.display = "none";
    block13.style.display = "none";
    block14.style.display = "grid";
});