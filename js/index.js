const accountDetailsClass = document.querySelector('.account-details-form');

const editName = document.querySelector('#edit-name');
const editEmail = document.querySelector('#edit-email');

const saveName = document.querySelector('#save-name');
const saveEmail = document.querySelector('#save-email');

accountDetailsClass['name'].disabled = true;
accountDetailsClass['email'].disabled = true;

// to edit name
editName.addEventListener('click', () => {
    editName.style.display = "none";
    saveName.style.display = "block";
    accountDetailsClass['name'].disabled = false;
});

// to save name
saveName.addEventListener('click', () => {
    updateName(accountDetailsClass['name'].value);
    editName.style.marginTop = "-3vh"
    editName.style.display = "block";
    saveName.style.display = "none";
    accountDetailsClass['name'].disabled = false;
});

// to edit email
editEmail.addEventListener('click', () => {
    editEmail.style.display = "none";
    saveEmail.style.display = "block";
    accountDetailsClass['email'].disabled = false;
});

// to save email
saveEmail.addEventListener('click', () => {
    temp = accountDetailsClass['email'].value;
    status = updateEmail(accountDetailsClass['email'].value);
    if (!status) {
        accountDetailsClass['email'].value = temp;
    }
    editEmail.style.marginTop = "-3vh"
    editEmail.style.display = "block";
    saveEmail.style.display = "none";
    accountDetailsClass['email'].disabled = false;
});



function checkBeforeBooking(tripNumber) {
    if (auth.currentUser != null) {
        switch (tripNumber) {
            case 1:
                window.location = './trips-pages/1daytrip.html';
                break;
            case 2:
                window.location = './trips-pages/2daytrip.html';
                break;
            case 3:
                window.location = './trips-pages/3daytrip.html';
                break;
            case 4:
                window.location = './trips-pages/4daytrip.html';
                break;
        }
    } else {
        displayMessageBoxFunction('Sign up or Log in to continue')
        signUpFunction();
    }
}

