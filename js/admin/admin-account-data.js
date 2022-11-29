let accountName = document.getElementById('account-user-name-ID-Data');
let accountEmail = document.getElementById('account-email-ID-Data');



function accountData(uid) {
    db.collection("users").doc(uid).get().then((doc) => {
        accountName.textContent = doc.data().name;
        accountEmail.textContent = doc.data().email;
    });
}