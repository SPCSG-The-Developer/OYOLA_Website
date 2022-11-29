// tracking log-in & log-out status

let subMenu1 = document.querySelector('#sub-menu1');
let subMenu2 = document.querySelector('#sub-menu2');


auth.onAuthStateChanged(user => {
    handleMenuLinksFun(user);
    if (user) {
        setUpUserInfo(user.uid, user.email);
    }
});

// sign up

let signUpForm = document.querySelector('#sign-up-form');
let signUpError = document.querySelector('#sign-up-error');

signUpForm.addEventListener('submit', (e) => {

    signUpError.innerHTML = "";

    // to restrict reloading on clicking submit button
    e.preventDefault();

    // getting user info

    const name = signUpForm['name'].value;
    const email = signUpForm['email'].value;
    const password = signUpForm['password'].value;

    // sign up  creating account for the user

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const userUid = cred.user.uid;
        addAccountBasicInfo(userUid, name, email);
        signUpCloseFunction();
        signUpForm.reset();
        statusDisplayModalFunction("OYOLA", "Welcome to Oyola, Thanks for joining our community. We provide an exclusive travel & stay experiences with amazing deals and offers.");
    }).catch((error) => {
        if (error.code == "auth/email-already-in-use") {
            signUpError.innerHTML = "Looks like you already have an account. Please log in instead."
        }
    })
});

// log out

let logOut = document.querySelector('#log-out');

logOut.addEventListener('click', () => {
    auth.signOut();
    displayMessageBoxFunction("You're logged out successfully");
    location.reload();
});


// log in


let LogInForm = document.querySelector('#log-in-form');
let LogInError = document.querySelector('#log-in-error');

LogInForm.addEventListener('submit', (e) => {

    LogInError.innerHTML = "";

    // to restrict reloading on clicking submit button
    e.preventDefault();

    // getting user info
    const email = LogInForm['email'].value;
    const password = LogInForm['password'].value;

    // logging in with email and password

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        const userUid = cred.user.uid;
        logInCloseFunction();
        LogInForm.reset();
        displayMessageBoxFunction("You're logged in as " + email);
    }).catch((error) => {
        if (error.code == "auth/user-not-found") {
            LogInError.innerHTML = "Invalid email"
        } else if (error.code = "auth/wrong-password") {
            LogInError.innerHTML = "Incorrect password"
        }
    });

})

// update email

function updateEmail(updatedEmail) {
    auth.currentUser.verifyBeforeUpdateEmail(updatedEmail).then(() => {
        displayMessageBoxFunction("To update your email address, Please click on the Verication link that has been sent to " + updatedEmail)
    }).catch((error) => {
        if (error.code == "auth/requires-recent-login") {
            displayMessageBoxFunction("To update your email, please log out and log in once ");
        }
        return false;
    })
}

// send email reset password reset link

let resetPasswordForm = document.querySelector('#reset-password-form');
let errorText = document.querySelector('#errorText');
resetPasswordForm.addEventListener('submit', (e) => {
    // to restrict reloading on clicking submit button
    e.preventDefault();

    // getting email info
    const email = resetPasswordForm['email'].value;

    // sending rest password email 

    auth.sendPasswordResetEmail(email).then(() => {
        forgotPasswordCloseFunction();
        logInCloseFunction();
        displayMessageBoxFunction("A link to reset your password has been sent to " + email);
    }).catch((error) => {
        switch (error.code) {
            case "auth/user-not-found":
                errorText.innerHTML = "Looks like you doesn't have an account. Please sign up instead."
                break;

            default:
                errorText.innerHTML = "Invalid email"
                break;
        }

    })

})