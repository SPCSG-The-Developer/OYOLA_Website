const trip1DataPending = document.getElementById("trip1DataPending");
const trip1DataConfirmed = document.getElementById("trip1DataConfirmed");
const trip1DataCancelled = document.getElementById("trip1DataCancelled");
const trip1DataCompleted = document.getElementById("trip1DataCompleted");

const dataBoxModal = document.getElementById("hiddenBoxTrip1");
const closeBtn = document.getElementById("close");

let customerName = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let checkIn = document.getElementById("check-in");
let checkOut = document.getElementById("check-out");
let cabType = document.getElementById("cab-type");
let adultCount = document.getElementById("adult-count");
let childrenCount = document.getElementById("children-count");
let infantsCount = document.getElementById("infants-count");
let breakfast = document.getElementById("breakfast");
let lunch = document.getElementById("lunch");
let status = document.getElementById("status");

let pendingCustomersArray = [];
let pendingCustomersData = {};

function trip1PendingDataFunction(doc) {

    if (doc.data().status == "pending") {
        let oneUser = document.createElement('div');
        let statusBox = document.createElement('div');

        oneUser.setAttribute('class', 'oneUser');
        oneUser.setAttribute('id', doc.id + 'oneUserPending');
        statusBox.setAttribute('class', 'statusBox');
        statusBox.setAttribute('id', doc.id + 'statusBox');

        let li = document.createElement('li');
        li.style.cursor = "pointer";
        li.setAttribute('id', doc.id);

        let select = document.createElement('select');
        let pendingOption = document.createElement('option');
        let confirmedOption = document.createElement('option');
        let cancelledOption = document.createElement('option');
        let updateButton = document.createElement('button');

        select.setAttribute('id', doc.id + 'status');
        pendingOption.setAttribute('id', doc.id + 'pendingOption')
        confirmedOption.setAttribute('id', doc.id + 'confirmedOption');
        cancelledOption.setAttribute('id', doc.id + 'cancelledOption');

        updateButton.setAttribute('id', doc.id + 'updateButton');

        pendingOption.text = "pending";
        confirmedOption.text = "confirmed";
        cancelledOption.text = "cancelled"
        updateButton.textContent = "Update";

        select.add(pendingOption);
        select.add(confirmedOption);
        select.add(cancelledOption);

        // setting customer data

        pendingCustomersData["id"] = li.getAttribute('id');
        pendingCustomersData["customerName"] = doc.data().name;
        pendingCustomersData["phoneNumber"] = doc.data().phone_number;
        pendingCustomersData["email"] = doc.data().email;
        pendingCustomersData["checkIn"] = doc.data().checkIn;
        pendingCustomersData["checkOut"] = doc.data().checkOut;
        pendingCustomersData["adults"] = doc.data().adults;
        pendingCustomersData["children"] = doc.data().children;
        pendingCustomersData["infants"] = doc.data().infants;
        pendingCustomersData["cabType"] = doc.data().cab_type;
        pendingCustomersData["breakfast"] = doc.data().breakfast;
        pendingCustomersData["lunch"] = doc.data().lunch;

        pendingCustomersData["updateBtnId"] = updateButton.getAttribute('id');
        pendingCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        pendingCustomersArray[pendingCustomersArray.length] = pendingCustomersData;

        // clear the customerData object
        pendingCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        statusBox.appendChild(updateButton);
        oneUser.append(statusBox);
        trip1DataPending.prepend(oneUser);
    }
}

function updatePendingData() {
    for (let i = 0; i < pendingCustomersArray.length; i++) {
        const customer = document.getElementById(pendingCustomersArray[i].id);
        customer.addEventListener('click', () => {
            customerName.value = pendingCustomersArray[i].customerName;
            email.value = pendingCustomersArray[i].email;
            phoneNumber.value = pendingCustomersArray[i].phoneNumber;
            checkIn.value = pendingCustomersArray[i].checkIn;
            checkOut.value = pendingCustomersArray[i].checkOut;
            cabType.value = pendingCustomersArray[i].cabType;
            adultCount.value = pendingCustomersArray[i].adults;
            childrenCount.value = pendingCustomersArray[i].children;
            infantsCount.value = pendingCustomersArray[i].infants;
            breakfast.value = pendingCustomersArray[i].breakfast;
            lunch.value = pendingCustomersArray[i].lunch;

            dataBoxModal.style.display = "block"
        })
    }

    for (let i = 0; i < pendingCustomersArray.length; i++) {
        const btn = document.getElementById(pendingCustomersArray[i].updateBtnId);
        let selectId = document.getElementById(pendingCustomersArray[i].selectId);

        btn.addEventListener('click', () => {
            let btnId = pendingCustomersArray[i].updateBtnId;
            let docId = btnId.replace('updateButton', '');

            if (selectId.value != "pending") {
                db.collection("1dayTripBookings").doc(docId).update({
                    status: selectId.value,
                }).then(() => {
                    let parentDiv = document.getElementById(docId + "oneUserPending");
                    if (parentDiv != null) {
                        parentDiv.remove();
                        pendingCustomersArray.splice(i, 1);
                        updatePendingData();
                        updateConfirmedData();
                        updateCancelledData();
                        displayMessageBoxFunction("updated successfully");
                    }
                })
            } else {
                displayMessageBoxFunction("updated successfully");
            }
        })
    }
}


let confirmedCustomersArray = [];
let confirmedCustomersData = {};

function trip1ConfirmedDataFunction(doc) {
    if (doc.data().status == "confirmed") {
        let oneUser = document.createElement('div');
        let statusBox = document.createElement('div');

        oneUser.setAttribute('class', 'oneUser');
        oneUser.setAttribute('id', doc.id + 'oneUserConfirmed');
        statusBox.setAttribute('class', 'statusBox');
        statusBox.setAttribute('id', doc.id + 'statusBox');

        let li = document.createElement('li');
        li.style.cursor = "pointer";
        li.setAttribute('id', doc.id);

        let select = document.createElement('select');
        let confirmedOption = document.createElement('option');
        let cancelledOption = document.createElement('option');
        let completedOption = document.createElement('option');
        let updateButton = document.createElement('button');

        select.setAttribute('id', doc.id + 'status');
        confirmedOption.setAttribute('id', doc.id + 'confirmedOption');
        cancelledOption.setAttribute('id', doc.id + 'cancelledOption');
        completedOption.setAttribute('id', doc.id + 'completedOption');

        updateButton.setAttribute('id', doc.id + 'updateButton');

        confirmedOption.text = "confirmed";
        cancelledOption.text = "cancelled"
        completedOption.text = "completed"
        updateButton.textContent = "Update";

        select.add(confirmedOption);
        select.add(cancelledOption);
        select.add(completedOption);

        // setting customer data

        confirmedCustomersData["id"] = li.getAttribute('id');
        confirmedCustomersData["customerName"] = doc.data().name;
        confirmedCustomersData["phoneNumber"] = doc.data().phone_number;
        confirmedCustomersData["email"] = doc.data().email;
        confirmedCustomersData["checkIn"] = doc.data().checkIn;
        confirmedCustomersData["checkOut"] = doc.data().checkOut;
        confirmedCustomersData["adults"] = doc.data().adults;
        confirmedCustomersData["children"] = doc.data().children;
        confirmedCustomersData["infants"] = doc.data().infants;
        confirmedCustomersData["cabType"] = doc.data().cab_type;
        confirmedCustomersData["breakfast"] = doc.data().breakfast;
        confirmedCustomersData["lunch"] = doc.data().lunch;

        confirmedCustomersData["updateBtnId"] = updateButton.getAttribute('id');
        confirmedCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        confirmedCustomersArray[confirmedCustomersArray.length] = confirmedCustomersData;

        // clear the customerData object
        confirmedCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        statusBox.appendChild(updateButton);
        oneUser.append(statusBox);
        trip1DataConfirmed.prepend(oneUser);
    }
}

function updateConfirmedData() {
    for (let i = 0; i < confirmedCustomersArray.length; i++) {
        const customer = document.getElementById(confirmedCustomersArray[i].id);
        if (customer != null) {
            customer.addEventListener('click', () => {
                customerName.value = confirmedCustomersArray[i].customerName;
                email.value = confirmedCustomersArray[i].email;
                phoneNumber.value = confirmedCustomersArray[i].phoneNumber;
                checkIn.value = confirmedCustomersArray[i].checkIn;
                checkOut.value = confirmedCustomersArray[i].checkOut;
                cabType.value = confirmedCustomersArray[i].cabType;
                adultCount.value = confirmedCustomersArray[i].adults;
                childrenCount.value = confirmedCustomersArray[i].children;
                infantsCount.value = confirmedCustomersArray[i].infants;
                breakfast.value = confirmedCustomersArray[i].breakfast;
                lunch.value = confirmedCustomersArray[i].lunch;

                dataBoxModal.style.display = "block"
            })
        }
    }

    for (let i = 0; i < confirmedCustomersArray.length; i++) {
        const btn = document.getElementById(confirmedCustomersArray[i].updateBtnId);
        let selectId = document.getElementById(confirmedCustomersArray[i].selectId);
        if (btn != null) {
            btn.addEventListener('click', () => {
                let btnId = confirmedCustomersArray[i].updateBtnId;
                let docId = btnId.replace('updateButton', '');

                if (selectId.value != "confirmed") {
                    db.collection("1dayTripBookings").doc(docId).update({
                        status: selectId.value,
                    }).then(() => {
                        let parentDiv = document.getElementById(docId + "oneUserConfirmed");
                        if (parentDiv != null) {
                            parentDiv.remove();
                            confirmedCustomersArray.splice(i, 1);
                            updateConfirmedData();
                            updateCancelledData();
                            updateCompletedData();
                            displayMessageBoxFunction("updated successfully");
                        }
                    })
                } else {
                    displayMessageBoxFunction("updated successfully");
                }
            })
        }
    }
}

let cancelledCustomersArray = [];
let cancelledCustomersData = {};

function trip1CancelledDataFunction(doc) {
    if (doc.data().status == "cancelled") {
        let oneUser = document.createElement('div');
        let statusBox = document.createElement('div');

        oneUser.setAttribute('class', 'oneUser');
        statusBox.setAttribute('class', 'statusBox');

        let li = document.createElement('li');
        li.style.cursor = "pointer";
        li.setAttribute('id', doc.id);

        let select = document.createElement('select');
        select.style.width = "70%";
        let cancelledOption = document.createElement('option');

        select.setAttribute('id', doc.id + 'status');
        cancelledOption.setAttribute('id', doc.id + 'cancelledOption');

        cancelledOption.text = "cancelled"

        select.add(cancelledOption);

        // setting customer data

        cancelledCustomersData["id"] = li.getAttribute('id');
        cancelledCustomersData["customerName"] = doc.data().name;
        cancelledCustomersData["phoneNumber"] = doc.data().phone_number;
        cancelledCustomersData["email"] = doc.data().email;
        cancelledCustomersData["checkIn"] = doc.data().checkIn;
        cancelledCustomersData["checkOut"] = doc.data().checkOut;
        cancelledCustomersData["adults"] = doc.data().adults;
        cancelledCustomersData["children"] = doc.data().children;
        cancelledCustomersData["infants"] = doc.data().infants;
        cancelledCustomersData["cabType"] = doc.data().cab_type;
        cancelledCustomersData["breakfast"] = doc.data().breakfast;
        cancelledCustomersData["lunch"] = doc.data().lunch;

        cancelledCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        cancelledCustomersArray[cancelledCustomersArray.length] = cancelledCustomersData;

        // clear the customerData object
        cancelledCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        oneUser.append(statusBox);
        trip1DataCancelled.prepend(oneUser);
    }
}

function updateCancelledData() {
    for (let i = 0; i < cancelledCustomersArray.length; i++) {
        const customer = document.getElementById(cancelledCustomersArray[i].id);
        customer.addEventListener('click', () => {
            customerName.value = cancelledCustomersArray[i].customerName;
            email.value = cancelledCustomersArray[i].email;
            phoneNumber.value = cancelledCustomersArray[i].phoneNumber;
            checkIn.value = cancelledCustomersArray[i].checkIn;
            checkOut.value = cancelledCustomersArray[i].checkOut;
            cabType.value = cancelledCustomersArray[i].cabType;
            adultCount.value = cancelledCustomersArray[i].adults;
            childrenCount.value = cancelledCustomersArray[i].children;
            infantsCount.value = cancelledCustomersArray[i].infants;
            breakfast.value = cancelledCustomersArray[i].breakfast;
            lunch.value = cancelledCustomersArray[i].lunch;

            dataBoxModal.style.display = "block"
        })
    }
}


let completedCustomersArray = [];
let completedCustomersData = {};

function trip1CompletedDataFunction(doc) {
    if (doc.data().status == "completed") {
        let oneUser = document.createElement('div');
        let statusBox = document.createElement('div');

        oneUser.setAttribute('class', 'oneUser');
        statusBox.setAttribute('class', 'statusBox');

        let li = document.createElement('li');
        li.style.cursor = "pointer";
        li.setAttribute('id', doc.id);

        let select = document.createElement('select');
        select.style.width = "70%";
        let completedOption = document.createElement('option');

        select.setAttribute('id', doc.id + 'status');
        completedOption.setAttribute('id', doc.id + 'completedOption');

        completedOption.text = "completed"

        select.add(completedOption);

        // setting customer data

        completedCustomersData["id"] = li.getAttribute('id');
        completedCustomersData["customerName"] = doc.data().name;
        completedCustomersData["phoneNumber"] = doc.data().phone_number;
        completedCustomersData["email"] = doc.data().email;
        completedCustomersData["checkIn"] = doc.data().checkIn;
        completedCustomersData["checkOut"] = doc.data().checkOut;
        completedCustomersData["adults"] = doc.data().adults;
        completedCustomersData["children"] = doc.data().children;
        completedCustomersData["infants"] = doc.data().infants;
        completedCustomersData["cabType"] = doc.data().cab_type;
        completedCustomersData["breakfast"] = doc.data().breakfast;
        completedCustomersData["lunch"] = doc.data().lunch;

        completedCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        completedCustomersArray[completedCustomersArray.length] = completedCustomersData;

        // clear the customerData object
        completedCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        oneUser.append(statusBox);
        trip1DataCompleted.prepend(oneUser);
    }
}

function updateCompletedData() {
    for (let i = 0; i < completedCustomersArray.length; i++) {
        const customer = document.getElementById(completedCustomersArray[i].id);
        customer.addEventListener('click', () => {
            customerName.value = completedCustomersArray[i].customerName;
            email.value = completedCustomersArray[i].email;
            phoneNumber.value = completedCustomersArray[i].phoneNumber;
            checkIn.value = completedCustomersArray[i].checkIn;
            checkOut.value = completedCustomersArray[i].checkOut;
            cabType.value = completedCustomersArray[i].cabType;
            adultCount.value = completedCustomersArray[i].adults;
            childrenCount.value = completedCustomersArray[i].children;
            infantsCount.value = completedCustomersArray[i].infants;
            breakfast.value = completedCustomersArray[i].breakfast;
            lunch.value = completedCustomersArray[i].lunch;

            dataBoxModal.style.display = "block"
        })
    }
}


closeBtn.addEventListener('click', trip1closeBox)
function trip1closeBox() {
    dataBoxModal.style.display = "none";
}

function trip1BookingsFunction() {
    if (auth.currentUser == null) { return }
    db.collection("1dayTripBookings").orderBy("timeStamp").onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type === "added") {
                trip1PendingDataFunction(change.doc);
                trip1ConfirmedDataFunction(change.doc);
                trip1CancelledDataFunction(change.doc);
                trip1CompletedDataFunction(change.doc);
            }
            if (change.type === "modified") {
                if (change.doc.data().status == "confirmed") {
                    trip1ConfirmedDataFunction(change.doc);
                }
                if (change.doc.data().status == "cancelled") {
                    trip1CancelledDataFunction(change.doc);
                }
                if (change.doc.data().status == "completed") {
                    trip1CompletedDataFunction(change.doc);
                }
            }
        });
        updatePendingData();
        updateConfirmedData();
        updateCancelledData();
        updateCompletedData();
    })
}

