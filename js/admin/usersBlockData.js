const snoData = document.getElementById("snoData");
const emailData = document.getElementById("email-ID-Data");
const userNameForUsersTab = document.getElementById("user-name-ID-Data");

let sno = 1;

function usersDataFunction(doc) {

    let snoLi = document.createElement('li');
    snoLi.textContent = sno++;
    snoData.append(snoLi);

    let userNameLi = document.createElement('li');
    userNameLi.textContent = doc.data().name;
    userNameForUsersTab.append(userNameLi);

    let userEmailLi = document.createElement('li');
    userEmailLi.textContent = doc.data().email;
    emailData.append(userEmailLi);

}

function usersRetrieveFunction() {
    if (auth.currentUser == null) { return }
    db.collection("users").get().then((docs) => {
        docs.forEach((doc) => {
            usersDataFunction(doc);
        })
    });
}
