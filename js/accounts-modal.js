let displayMessageBox = document.getElementById("displayMessageBox");
let displayMessage = document.getElementById("displayMessage");

function displayMessageBoxFunction(text) {
    displayMessage.innerHTML = text;
    displayMessageBox.style.display = "block";
    setTimeout(function(){
        displayMessageBoxCloseFunction();
    }, 1000 * 5);
}

function displayMessageBoxCloseFunction(){
    displayMessageBox.style.display = "none";
}

let statusDisplayModal = document.getElementById("status-display-modal");
let statusDisplayModalClose = document.getElementById("status-display-modal-close");
let statusTitle = document.getElementById("statusTitle");
let statusContent = document.getElementById("statusContent");


function statusDisplayModalFunction(title,content){
    statusTitle.innerHTML = title;
    statusContent.innerHTML = content;
    statusDisplayModal.style.display = "block";
}

statusDisplayModalClose.addEventListener('click',statusDisplayModalCloseFunction);

function statusDisplayModalCloseFunction() {
    statusText = "";
    statusDisplayModal.style.display = "none";
}


let signUp = document.getElementById("sign-up");
let logIn = document.getElementById("log-in");
let signUpModal = document.getElementById("sign-up-modal");
let logInModal = document.getElementById("log-in-modal");
let signUpModalClose = document.getElementById("sign-up-modal-close");
let logInModalClose = document.getElementById("log-in-modal-close");


let bottomText1 = document.getElementById("bottom-text1");
let bottomText2 = document.getElementById("bottom-text2");

signUp.addEventListener('click',signUpFunction);
logIn.addEventListener('click',logInFunction);

signUpModalClose.addEventListener('click',signUpCloseFunction);
logInModalClose.addEventListener('click',logInCloseFunction);

bottomText1.addEventListener('click',()=>{
    signUpCloseFunction();
    logInFunction();
});
bottomText2.addEventListener('click',()=>{
    logInCloseFunction();
    signUpFunction();
});

function signUpFunction() {
    signUpModal.style.display = "block";
}

function signUpCloseFunction() {
    signUpModal.style.display = "none";
}

function logInFunction() {
    logInModal.style.display = "block";
}

function logInCloseFunction() {
    logInModal.style.display = "none";
}

let fogotPasswordText = document.getElementById("fogotPasswordText");
let resetPasswordModal = document.getElementById("reset-password-modal");
let resetPasswordModalClose = document.getElementById("reset-password-modal-close");

fogotPasswordText.addEventListener('click', forgotPasswordFunction);

function forgotPasswordFunction(){
    resetPasswordModal.style.display = "block";
}
resetPasswordModalClose.addEventListener('click',forgotPasswordCloseFunction);
function forgotPasswordCloseFunction(){
    resetPasswordModal.style.display = "none";
}

// account info modal box 

let accountInfoBtn = document.getElementById("account");
let accountDetailsModal = document.getElementById("account-details-modal");
let accountDetailsModalClose = document.getElementById("account-details-modal-close");

accountInfoBtn.addEventListener('click',accountDetailsModalFunction);
accountDetailsModalClose.addEventListener('click',accountDetailsModalCloseFunction);

function accountDetailsModalFunction() {
    accountDetailsModal.style.display = "block";
}
function accountDetailsModalCloseFunction() {
    accountDetailsModal.style.display = "none";
}