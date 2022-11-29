let trip1PlacesLink = document.getElementById("trip1PlacesLink");
let trip2PlacesLink = document.getElementById("trip2PlacesLink");
let trip3PlacesLink = document.getElementById("trip3PlacesLink");
let trip4PlacesLink = document.getElementById("trip4PlacesLink");

let tripModal1 = document.getElementById("tripModal1");
let tripModal2 = document.getElementById("tripModal2");
let tripModal3 = document.getElementById("tripModal3");
let tripModal4 = document.getElementById("tripModal4");

let trip1Close1 = document.getElementById("trip1Close1");
let trip1Close2 = document.getElementById("trip2Close2");
let trip1Close3 = document.getElementById("trip3Close3");
let trip1Close4 = document.getElementById("trip4Close4");

trip1PlacesLink.onclick = function(){
    tripModal1.style.display = "block";
}
trip1Close1.onclick = function(){
    tripModal1.style.display = "none";
}

trip2PlacesLink.onclick = function(){
    tripModal2.style.display = "block";
}
trip2Close2.onclick = function(){
    tripModal2.style.display = "none";
}

trip3PlacesLink.onclick = function(){
    tripModal3.style.display = "block";
}
trip3Close3.onclick = function(){
    tripModal3.style.display = "none";
}
trip4PlacesLink.onclick = function(){
    tripModal4.style.display = "block";
}
trip4Close4.onclick = function(){
    tripModal4.style.display = "none";
}

let addOns2Link = document.getElementById("addOns2Link");
let addOns3Link = document.getElementById("addOns3Link");
let addOns4Link = document.getElementById("addOns4Link");

let addOnsModal2 = document.getElementById("addOnsModal2");
let addOnsModal3 = document.getElementById("addOnsModal3");
let addOnsModal4 = document.getElementById("addOnsModal4");

let addOns2Close2 = document.getElementById("addOns2Close2");
let addOns3Close3 = document.getElementById("addOns3Close3");
let addOns4Close4 = document.getElementById("addOns4Close4");

addOns2Link.onclick = function(){
    addOnsModal2.style.display = "block";
}
addOns2Close2.onclick = function(){
    addOnsModal2.style.display = "none";
}

addOns3Link.onclick = function(){
    addOnsModal3.style.display = "block";
}
addOns3Close3.onclick = function(){
    addOnsModal3.style.display = "none";
}

addOns4Link.onclick = function(){
    addOnsModal4.style.display = "block";
}
addOns4Close4.onclick = function(){
    addOnsModal4.style.display = "none";
}

let element1 = document.getElementById("service-1-link");
let element2 = document.getElementById("service-2-link");
let element3 = document.getElementById("service-3-link");
let element4 = document.getElementById("service-4-link");
let element5 = document.getElementById("service-5-link");

let close1 = document.getElementById("close1");
let close2 = document.getElementById("close2");
let close3 = document.getElementById("close3");
let close4 = document.getElementById("close4");
let close5 = document.getElementById("close5");

let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");
let modal4 = document.getElementById("modal4");
let modal5 = document.getElementById("modal5");

element1.onclick = function () {
    modal1.style.display = "block";
}

close1.onclick = function () {
    modal1.style.display = "none";
}

element2.onclick = function () {
    modal2.style.display = "block";
}

close2.onclick = function () {
    modal2.style.display = "none";
}

element3.onclick = function () {
    modal3.style.display = "block";
}

close3.onclick = function () {
    modal3.style.display = "none";
}

element4.onclick = function () {
    modal4.style.display = "block";
}

close4.onclick = function () {
    modal4.style.display = "none";
}

element5.onclick = function () {
    modal5.style.display = "block";
}

close5.onclick = function () {
    modal5.style.display = "none";
}
