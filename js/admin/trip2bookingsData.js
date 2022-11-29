const trip2DataPending = document.getElementById("trip2DataPending");
const trip2DataConfirmed = document.getElementById("trip2DataConfirmed");
const trip2DataCancelled = document.getElementById("trip2DataCancelled");
const trip2DataCompleted = document.getElementById("trip2DataCompleted");

const trip2DataBoxModal = document.getElementById("hiddenBoxTrip2");
const trip2CloseBtn = document.getElementById("trip2Close");

let trip2CustomerName = document.getElementById("trip2-name");
let trip2Email = document.getElementById("trip2-email");
let trip2PhoneNumber = document.getElementById("trip2-phoneNumber");
let trip2CheckIn = document.getElementById("trip2-check-in");
let trip2CheckOut = document.getElementById("trip2-check-out");
let trip2AdultCount = document.getElementById("trip2-adult-count");
let trip2ChildrenCount = document.getElementById("trip2-children-count");
let trip2InfantsCount = document.getElementById("trip2-infants-count");
let trip2RoomsCount = document.getElementById("trip2-rooms-count");
let trip2RoomType = document.getElementById("trip2-rooms-type");
let trip2CabType = document.getElementById("trip2-cab-type");
let trip2Firecamp = document.getElementById("trip2-firecamp");
let trip2Dance = document.getElementById("trip2-dhimsa-dance");
let trip2Tent = document.getElementById("trip2-tent-for-rent");
let trip2Cuisine = document.getElementById("trip2-Araku-cuisine-experience");
let trip2Lunch = document.getElementById("trip2Lunch");
let trip2KatikiWaterfalls = document.getElementById("trip2Katiki-waterfalls");
let trip2Status = document.getElementById("status");

let trip2PendingCustomersArray = [];
let trip2PendingCustomersData = {};

function trip2PendingDataFunction(doc) {

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

        trip2PendingCustomersData["id"] = li.getAttribute('id');
        trip2PendingCustomersData["customerName"] = doc.data().name;
        trip2PendingCustomersData["phoneNumber"] = doc.data().phone_number;
        trip2PendingCustomersData["email"] = doc.data().email;
        trip2PendingCustomersData["checkIn"] = doc.data().checkIn;
        trip2PendingCustomersData["checkOut"] = doc.data().checkOut;
        trip2PendingCustomersData["adults"] = doc.data().adults;
        trip2PendingCustomersData["children"] = doc.data().children;
        trip2PendingCustomersData["infants"] = doc.data().infants;
        trip2PendingCustomersData["rooms"] = doc.data().rooms;
        trip2PendingCustomersData["roomsType"] = doc.data().room_type;
        trip2PendingCustomersData["cabType"] = doc.data().cab_type;
        trip2PendingCustomersData["lunch"] = doc.data().lunch;
        trip2PendingCustomersData["firecamp"] = doc.data().firecamp;
        trip2PendingCustomersData["dhimsDance"] = doc.data().dhims_Dance;
        trip2PendingCustomersData["tent"] = doc.data().tent_For_Rent;
        trip2PendingCustomersData["arakuCusineExpeirience"] = doc.data().araku_Cusine_Expeirience;
        trip2PendingCustomersData["katikiWaterfalls"] = doc.data().katiki_Waterfalls;

        trip2PendingCustomersData["updateBtnId"] = updateButton.getAttribute('id');
        trip2PendingCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        trip2PendingCustomersArray[trip2PendingCustomersArray.length] = trip2PendingCustomersData;

        // clear the customerData object
        trip2PendingCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        statusBox.appendChild(updateButton);
        oneUser.append(statusBox);
        trip2DataPending.prepend(oneUser);
    }
}

function trip2UpdatePendingData() {
    for (let i = 0; i < trip2PendingCustomersArray.length; i++) {
        const customer = document.getElementById(trip2PendingCustomersArray[i].id);
        customer.addEventListener('click', () => {
            trip2CustomerName.value = trip2PendingCustomersArray[i].customerName;
            trip2Email.value = trip2PendingCustomersArray[i].email;
            trip2PhoneNumber.value = trip2PendingCustomersArray[i].phoneNumber;
            trip2CheckIn.value = trip2PendingCustomersArray[i].checkIn;
            trip2CheckOut.value = trip2PendingCustomersArray[i].checkOut;
            trip2AdultCount.value = trip2PendingCustomersArray[i].adults;
            trip2ChildrenCount.value = trip2PendingCustomersArray[i].children;
            trip2InfantsCount.value = trip2PendingCustomersArray[i].infants;
            trip2RoomsCount.value = trip2PendingCustomersArray[i].rooms;
            trip2RoomType.value = trip2PendingCustomersArray[i].roomsType;
            trip2CabType.value = trip2PendingCustomersArray[i].cabType;
            trip2Firecamp.value = trip2PendingCustomersArray[i].firecamp;
            trip2Dance.value = trip2PendingCustomersArray[i].dhimsDance;
            trip2Tent.value = trip2PendingCustomersArray[i].tent;
            trip2Cuisine.value = trip2PendingCustomersArray[i].arakuCusineExpeirience;
            trip2Lunch.value = trip2PendingCustomersArray[i].lunch;
            trip2KatikiWaterfalls.value = trip2PendingCustomersArray[i].katikiWaterfalls;

            trip2DataBoxModal.style.display = "block"
        })
    }

    for (let i = 0; i < trip2PendingCustomersArray.length; i++) {
        const btn = document.getElementById(trip2PendingCustomersArray[i].updateBtnId);
        let selectId = document.getElementById(trip2PendingCustomersArray[i].selectId);

        btn.addEventListener('click', () => {
            let btnId = trip2PendingCustomersArray[i].updateBtnId;
            let docId = btnId.replace('updateButton', '');

            if (selectId.value != "pending") {
                db.collection("2dayTripBookings").doc(docId).update({
                    status: selectId.value,
                }).then(() => {
                    let parentDiv = document.getElementById(docId + "oneUserPending");
                    if (parentDiv != null) {
                        parentDiv.remove();
                        trip2PendingCustomersArray.splice(i, 1);
                        trip2UpdatePendingData();
                        trip2UpdateConfirmedData();
                        trip2UpdateCancelledData();
                        displayMessageBoxFunction("updated successfully");
                    }
                })
            } else {
                displayMessageBoxFunction("updated successfully");
            }
        })
    }
}


let trip2ConfirmedCustomersArray = [];
let trip2ConfirmedCustomersData = {};

function trip2ConfirmedDataFunction(doc) {
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

        trip2ConfirmedCustomersData["id"] = li.getAttribute('id');
        trip2ConfirmedCustomersData["customerName"] = doc.data().name;
        trip2ConfirmedCustomersData["phoneNumber"] = doc.data().phone_number;
        trip2ConfirmedCustomersData["email"] = doc.data().email;
        trip2ConfirmedCustomersData["checkIn"] = doc.data().checkIn;
        trip2ConfirmedCustomersData["checkOut"] = doc.data().checkOut;
        trip2ConfirmedCustomersData["adults"] = doc.data().adults;
        trip2ConfirmedCustomersData["children"] = doc.data().children;
        trip2ConfirmedCustomersData["infants"] = doc.data().infants;
        trip2ConfirmedCustomersData["rooms"] = doc.data().rooms;
        trip2ConfirmedCustomersData["roomsType"] = doc.data().room_type;
        trip2ConfirmedCustomersData["cabType"] = doc.data().cab_type;
        trip2ConfirmedCustomersData["lunch"] = doc.data().lunch;
        trip2ConfirmedCustomersData["firecamp"] = doc.data().firecamp;
        trip2ConfirmedCustomersData["dhimsDance"] = doc.data().dhims_Dance;
        trip2ConfirmedCustomersData["tent"] = doc.data().tent_For_Rent;
        trip2ConfirmedCustomersData["arakuCusineExpeirience"] = doc.data().araku_Cusine_Expeirience;
        trip2ConfirmedCustomersData["katikiWaterfalls"] = doc.data().katiki_Waterfalls;

        trip2ConfirmedCustomersData["updateBtnId"] = updateButton.getAttribute('id');
        trip2ConfirmedCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        trip2ConfirmedCustomersArray[trip2ConfirmedCustomersArray.length] = trip2ConfirmedCustomersData;

        // clear the customerData object
        trip2ConfirmedCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        statusBox.appendChild(updateButton);
        oneUser.append(statusBox);
        trip2DataConfirmed.prepend(oneUser);
    }
}

function trip2UpdateConfirmedData() {
    for (let i = 0; i < trip2ConfirmedCustomersArray.length; i++) {
        const customer = document.getElementById(trip2ConfirmedCustomersArray[i].id);
        if (customer != null) {
            customer.addEventListener('click', () => {
                trip2CustomerName.value = trip2ConfirmedCustomersArray[i].customerName;
                trip2Email.value = trip2ConfirmedCustomersArray[i].email;
                trip2PhoneNumber.value = trip2ConfirmedCustomersArray[i].phoneNumber;
                trip2CheckIn.value = trip2ConfirmedCustomersArray[i].checkIn;
                trip2CheckOut.value = trip2ConfirmedCustomersArray[i].checkOut;
                trip2AdultCount.value = trip2ConfirmedCustomersArray[i].adults;
                trip2ChildrenCount.value = trip2ConfirmedCustomersArray[i].children;
                trip2InfantsCount.value = trip2ConfirmedCustomersArray[i].infants;
                trip2RoomsCount.value = trip2ConfirmedCustomersArray[i].rooms;
                trip2RoomType.value = trip2ConfirmedCustomersArray[i].roomsType;
                trip2CabType.value = trip2ConfirmedCustomersArray[i].cabType;
                trip2Firecamp.value = trip2ConfirmedCustomersArray[i].firecamp;
                trip2Dance.value = trip2ConfirmedCustomersArray[i].dhimsDance;
                trip2Tent.value = trip2ConfirmedCustomersArray[i].tent;
                trip2Cuisine.value = trip2ConfirmedCustomersArray[i].arakuCusineExpeirience;
                trip2Lunch.value = trip2ConfirmedCustomersArray[i].lunch;
                trip2KatikiWaterfalls.value = trip2ConfirmedCustomersArray[i].katikiWaterfalls;

                trip2DataBoxModal.style.display = "block"
            })
        }
    }

    for (let i = 0; i < trip2ConfirmedCustomersArray.length; i++) {
        const btn = document.getElementById(trip2ConfirmedCustomersArray[i].updateBtnId);
        let selectId = document.getElementById(trip2ConfirmedCustomersArray[i].selectId);
        if (btn != null) {
            btn.addEventListener('click', () => {
                let btnId = trip2ConfirmedCustomersArray[i].updateBtnId;
                let docId = btnId.replace('updateButton', '');

                if (selectId.value != "confirmed") {
                    db.collection("2dayTripBookings").doc(docId).update({
                        status: selectId.value,
                    }).then(() => {
                        let parentDiv = document.getElementById(docId + "oneUserConfirmed");
                        if (parentDiv != null) {
                            parentDiv.remove();
                            trip2ConfirmedCustomersArray.splice(i, 1);
                            trip2UpdateConfirmedData();
                            trip2UpdateCancelledData();
                            trip2UpdateCompletedData();
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

let trip2CancelledCustomersArray = [];
let trip2CancelledCustomersData = {};

function trip2CancelledDataFunction(doc) {
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

        trip2CancelledCustomersData["id"] = li.getAttribute('id');
        trip2CancelledCustomersData["customerName"] = doc.data().name;
        trip2CancelledCustomersData["phoneNumber"] = doc.data().phone_number;
        trip2CancelledCustomersData["email"] = doc.data().email;
        trip2CancelledCustomersData["checkIn"] = doc.data().checkIn;
        trip2CancelledCustomersData["checkOut"] = doc.data().checkOut;
        trip2CancelledCustomersData["adults"] = doc.data().adults;
        trip2CancelledCustomersData["children"] = doc.data().children;
        trip2CancelledCustomersData["infants"] = doc.data().infants;
        trip2CancelledCustomersData["rooms"] = doc.data().rooms;
        trip2CancelledCustomersData["roomsType"] = doc.data().room_type;
        trip2CancelledCustomersData["cabType"] = doc.data().cab_type;
        trip2CancelledCustomersData["lunch"] = doc.data().lunch;
        trip2CancelledCustomersData["firecamp"] = doc.data().firecamp;
        trip2CancelledCustomersData["dhimsDance"] = doc.data().dhims_Dance;
        trip2CancelledCustomersData["tent"] = doc.data().tent_For_Rent;
        trip2CancelledCustomersData["arakuCusineExpeirience"] = doc.data().araku_Cusine_Expeirience;
        trip2CancelledCustomersData["katikiWaterfalls"] = doc.data().katiki_Waterfalls;

        trip2CancelledCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        trip2CancelledCustomersArray[trip2CancelledCustomersArray.length] = trip2CancelledCustomersData;

        // clear the customerData object
        trip2CancelledCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        oneUser.append(statusBox);
        trip2DataCancelled.prepend(oneUser);
    }
}

function trip2UpdateCancelledData() {
    for (let i = 0; i < trip2CancelledCustomersArray.length; i++) {
        const customer = document.getElementById(trip2CancelledCustomersArray[i].id);
        customer.addEventListener('click', () => {
            trip2CustomerName.value = trip2CancelledCustomersArray[i].customerName;
            trip2Email.value = trip2CancelledCustomersArray[i].email;
            trip2PhoneNumber.value = trip2CancelledCustomersArray[i].phoneNumber;
            trip2CheckIn.value = trip2CancelledCustomersArray[i].checkIn;
            trip2CheckOut.value = trip2CancelledCustomersArray[i].checkOut;
            trip2AdultCount.value = trip2CancelledCustomersArray[i].adults;
            trip2ChildrenCount.value = trip2CancelledCustomersArray[i].children;
            trip2InfantsCount.value = trip2CancelledCustomersArray[i].infants;
            trip2RoomsCount.value = trip2CancelledCustomersArray[i].rooms;
            trip2RoomType.value = trip2CancelledCustomersArray[i].roomsType;
            trip2CabType.value = trip2CancelledCustomersArray[i].cabType;
            trip2Firecamp.value = trip2CancelledCustomersArray[i].firecamp;
            trip2Dance.value = trip2CancelledCustomersArray[i].dhimsDance;
            trip2Tent.value = trip2CancelledCustomersArray[i].tent;
            trip2Cuisine.value = trip2CancelledCustomersArray[i].arakuCusineExpeirience;
            trip2Lunch.value = trip2CancelledCustomersArray[i].lunch;
            trip2KatikiWaterfalls.value = trip2CancelledCustomersArray[i].katikiWaterfalls;

            trip2DataBoxModal.style.display = "block"
        })
    }
}


let trip2CompletedCustomersArray = [];
let trip2CompletedCustomersData = {};

function trip2CompletedDataFunction(doc) {
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

        trip2CompletedCustomersData["id"] = li.getAttribute('id');
        trip2CompletedCustomersData["customerName"] = doc.data().name;
        trip2CompletedCustomersData["phoneNumber"] = doc.data().phone_number;
        trip2CompletedCustomersData["email"] = doc.data().email;
        trip2CompletedCustomersData["checkIn"] = doc.data().checkIn;
        trip2CompletedCustomersData["checkOut"] = doc.data().checkOut;
        trip2CompletedCustomersData["adults"] = doc.data().adults;
        trip2CompletedCustomersData["children"] = doc.data().children;
        trip2CompletedCustomersData["infants"] = doc.data().infants;
        trip2CompletedCustomersData["rooms"] = doc.data().rooms;
        trip2CompletedCustomersData["roomsType"] = doc.data().room_type;
        trip2CompletedCustomersData["cabType"] = doc.data().cab_type;
        trip2CompletedCustomersData["lunch"] = doc.data().lunch;
        trip2CompletedCustomersData["firecamp"] = doc.data().firecamp;
        trip2CompletedCustomersData["dhimsDance"] = doc.data().dhims_Dance;
        trip2CompletedCustomersData["tent"] = doc.data().tent_For_Rent;
        trip2CompletedCustomersData["arakuCusineExpeirience"] = doc.data().araku_Cusine_Expeirience;
        trip2CompletedCustomersData["katikiWaterfalls"] = doc.data().katiki_Waterfalls;

        trip2CompletedCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        trip2CompletedCustomersArray[trip2CompletedCustomersArray.length] = trip2CompletedCustomersData;

        // clear the customerData object
        trip2CompletedCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        oneUser.append(statusBox);
        trip2DataCompleted.prepend(oneUser);
    }
}

function trip2UpdateCompletedData() {
    for (let i = 0; i < trip2CompletedCustomersArray.length; i++) {
        const customer = document.getElementById(trip2CompletedCustomersArray[i].id);
        customer.addEventListener('click', () => {
            trip2CustomerName.value = trip2CompletedCustomersArray[i].customerName;
            trip2Email.value = trip2CompletedCustomersArray[i].email;
            trip2PhoneNumber.value = trip2CompletedCustomersArray[i].phoneNumber;
            trip2CheckIn.value = trip2CompletedCustomersArray[i].checkIn;
            trip2CheckOut.value = trip2CompletedCustomersArray[i].checkOut;
            trip2AdultCount.value = trip2CompletedCustomersArray[i].adults;
            trip2ChildrenCount.value = trip2CompletedCustomersArray[i].children;
            trip2InfantsCount.value = trip2CompletedCustomersArray[i].infants;
            trip2RoomsCount.value = trip2CompletedCustomersArray[i].rooms;
            trip2RoomType.value = trip2CompletedCustomersArray[i].roomsType;
            trip2CabType.value = trip2CompletedCustomersArray[i].cabType;
            trip2Firecamp.value = trip2CompletedCustomersArray[i].firecamp;
            trip2Dance.value = trip2CompletedCustomersArray[i].dhimsDance;
            trip2Tent.value = trip2CompletedCustomersArray[i].tent;
            trip2Cuisine.value = trip2CompletedCustomersArray[i].arakuCusineExpeirience;
            trip2Lunch.value = trip2CompletedCustomersArray[i].lunch;
            trip2KatikiWaterfalls.value = trip2CompletedCustomersArray[i].katikiWaterfalls;

            trip2DataBoxModal.style.display = "block"
        })
    }
}


trip2CloseBtn.addEventListener('click', trip2closeBox)
function trip2closeBox() {
    trip2DataBoxModal.style.display = "none";
}

function trip2BookingsFunction() {
    if (auth.currentUser == null) { return }
    db.collection("2dayTripBookings").orderBy("timeStamp").onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type === "added") {
                trip2PendingDataFunction(change.doc);
                trip2ConfirmedDataFunction(change.doc);
                trip2CancelledDataFunction(change.doc);
                trip2CompletedDataFunction(change.doc);
            }
            if (change.type === "modified") {
                if (change.doc.data().status == "confirmed") {
                    trip2ConfirmedDataFunction(change.doc);
                }
                if (change.doc.data().status == "cancelled") {
                    trip2CancelledDataFunction(change.doc);
                }
                if (change.doc.data().status == "completed") {
                    trip2CompletedDataFunction(change.doc);
                }
            }
        });
        trip2UpdatePendingData();
        trip2UpdateConfirmedData();
        trip2UpdateCancelledData();
        trip2UpdateCompletedData();
    })



}
