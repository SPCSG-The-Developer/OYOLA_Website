
// sending messages to our database from users

let normalContactForm = document.querySelector("#normal-contact-form");

normalContactForm.addEventListener('submit', (e) => {

    e.preventDefault();
    let currentTime = new Date;
    const userName = normalContactForm['name'].value;
    const mail = normalContactForm['email'].value;
    const phoneNumber = normalContactForm['phoneNumber'].value;
    const message = normalContactForm['message'].value;
    
    let validMobileNumberExpression = "^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[6789]\\d{9}$";

    if (!phoneNumber.match(validMobileNumberExpression)) {
        displayMessageBoxFunction("Invalid mobile number")
        return;
    }

    db.collection('messages').doc().set({
        name: userName,
        email: mail,
        phone_Number: phoneNumber,
        message_From_Contact_Section: message ,
        timeStamp: currentTime,
    });

    displayMessageBoxFunction("You're message sent successfully");
});