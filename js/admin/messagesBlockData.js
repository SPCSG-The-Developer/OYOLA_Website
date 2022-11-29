let messageBox = document.getElementById("messageBox");
let messageModalBoxClose = document.getElementById("messageModalBoxClose");

let nameIDDataMessage = document.getElementById("name-ID-Data-Message");
let emailIDDataMessage = document.getElementById("email-ID-Data-Message");
let phoneNumberIDDataMessage = document.getElementById("phoneNumber-ID-Data-Message");
let messageIDDataMessage = document.getElementById("message-ID-Data-Message");
let readButtonsBox = document.getElementById("readButtonsBox");

let messagesFromContactArray = [];
let messagesData = {};

function messageFunction(doc) {

    let nameLi = document.createElement('li');
    nameLi.textContent = doc.data().name;
    nameIDDataMessage.prepend(nameLi);

    let emailLi = document.createElement('li');
    emailLi.textContent = doc.data().email;
    emailIDDataMessage.prepend(emailLi);

    let phNoLi = document.createElement('li');
    phNoLi.textContent = doc.data().phone_Number;
    phoneNumberIDDataMessage.prepend(phNoLi);

    let readButton = document.createElement('h5');
    readButton.textContent = "Read Message";
    readButton.setAttribute('id',doc.id);
    readButton.setAttribute('class','read');

    messagesData["id"] = doc.id;
    messagesData["message"] = doc.data().message_From_Contact_Section;

    messagesFromContactArray[messagesFromContactArray.length] = messagesData;

    messagesData = {};    

    readButtonsBox.prepend(readButton);
}

function updateMessagesInModal() {
    for (let i = 0; i < messagesFromContactArray.length; i++) {
        const dynamicReadButton = document.getElementById(messagesFromContactArray[i].id)
        dynamicReadButton.addEventListener('click',()=>{
            messageIDDataMessage.textContent = messagesFromContactArray[i].message;
            messageBox.style.display = "block";
        })
    }
}

messageModalBoxClose.addEventListener('click', () => {
    messageBox.style.display = "none";
})


function messagesRetrieveFunction() {
    if (auth.currentUser == null) { return }
    db.collection("messages").orderBy("timeStamp").onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type === "added") {
                messageFunction(change.doc)
            }
        });
        updateMessagesInModal();
    })    
}

