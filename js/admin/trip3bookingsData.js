const trip3DataPending = document.getElementById("trip3DataPending");
const trip3DataConfirmed = document.getElementById("trip3DataConfirmed");
const trip3DataCancelled = document.getElementById("trip3DataCancelled");
const trip3DataCompleted = document.getElementById("trip3DataCompleted");

const trip3DataBoxModal = document.getElementById("hiddenBoxTrip3");
const trip3CloseBtn = document.getElementById("trip3Close");

let trip3CustomerName = document.getElementById("trip3-name");
let trip3Email = document.getElementById("trip3-email");
let trip3PhoneNumber = document.getElementById("trip3-phoneNumber");
let trip3CheckIn = document.getElementById("trip3-check-in");
let trip3CheckOut = document.getElementById("trip3-check-out");
let trip3AdultCount = document.getElementById("trip3-adult-count");
let trip3ChildrenCount = document.getElementById("trip3-children-count");
let trip3InfantsCount = document.getElementById("trip3-infants-count");
let trip3RoomsCount = document.getElementById("trip3-rooms-count");
let trip3RoomType = document.getElementById("trip3-rooms-type");
let trip3CabType = document.getElementById("trip3-cab-type");
let trip3Firecamp = document.getElementById("trip3-firecamp");
let trip3Dance = document.getElementById("trip3-dhimsa-dance");
let trip3Tent = document.getElementById("trip3-tent-for-rent");
let trip3Cuisine = document.getElementById("trip3-Araku-cuisine-experience");
let trip3Lunch = document.getElementById("trip3Lunch");
let trip3KatikiWaterfalls = document.getElementById("trip3Katiki-waterfalls");
let trip3RentARide = document.getElementById("trip3RentARide");
let trip3Status = document.getElementById("status");

let trip3PendingCustomersArray = [];
let trip3PendingCustomersData = {};

function trip3PendingDataFunction(doc) {

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

        trip3PendingCustomersData["id"] = li.getAttribute('id');
        trip3PendingCustomersData["customerName"] = doc.data().name;
        trip3PendingCustomersData["phoneNumber"] = doc.data().phone_number;
        trip3PendingCustomersData["email"] = doc.data().email;
        trip3PendingCustomersData["checkIn"] = doc.data().checkIn;
        trip3PendingCustomersData["checkOut"] = doc.data().checkOut;
        trip3PendingCustomersData["adults"] = doc.data().adults;
        trip3PendingCustomersData["children"] = doc.data().children;
        trip3PendingCustomersData["infants"] = doc.data().infants;
        trip3PendingCustomersData["rooms"] = doc.data().rooms;
        trip3PendingCustomersData["roomsType"] = doc.data().room_type;
        trip3PendingCustomersData["cabType"] = doc.data().cab_type;
        trip3PendingCustomersData["lunch"] = doc.data().lunch;
        trip3PendingCustomersData["firecamp"] = doc.data().firecamp;
        trip3PendingCustomersData["dhimsDance"] = doc.data().dhims_Dance;
        trip3PendingCustomersData["tent"] = doc.data().tent_For_Rent;
        trip3PendingCustomersData["arakuCusineExpeirience"] = doc.data().araku_Cusine_Expeirience;
        trip3PendingCustomersData["katikiWaterfalls"] = doc.data().katiki_Waterfalls;
        trip3PendingCustomersData["rentARide"] = doc.data().rent_A_Ride;

        trip3PendingCustomersData["updateBtnId"] = updateButton.getAttribute('id');
        trip3PendingCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        trip3PendingCustomersArray[trip3PendingCustomersArray.length] = trip3PendingCustomersData;

        // clear the customerData object
        trip3PendingCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        statusBox.appendChild(updateButton);
        oneUser.append(statusBox);
        trip3DataPending.prepend(oneUser);
    }
}

function trip3UpdatePendingData() {
    for (let i = 0; i < trip3PendingCustomersArray.length; i++) {
        const customer = document.getElementById(trip3PendingCustomersArray[i].id);
        customer.addEventListener('click', () => {
            trip3CustomerName.value = trip3PendingCustomersArray[i].customerName;
            trip3Email.value = trip3PendingCustomersArray[i].email;
            trip3PhoneNumber.value = trip3PendingCustomersArray[i].phoneNumber;
            trip3CheckIn.value = trip3PendingCustomersArray[i].checkIn;
            trip3CheckOut.value = trip3PendingCustomersArray[i].checkOut;
            trip3AdultCount.value = trip3PendingCustomersArray[i].adults;
            trip3ChildrenCount.value = trip3PendingCustomersArray[i].children;
            trip3InfantsCount.value = trip3PendingCustomersArray[i].infants;
            trip3RoomsCount.value = trip3PendingCustomersArray[i].rooms;
            trip3RoomType.value = trip3PendingCustomersArray[i].roomsType;
            trip3CabType.value = trip3PendingCustomersArray[i].cabType;
            trip3Firecamp.value = trip3PendingCustomersArray[i].firecamp;
            trip3Dance.value = trip3PendingCustomersArray[i].dhimsDance;
            trip3Tent.value = trip3PendingCustomersArray[i].tent;
            trip3Cuisine.value = trip3PendingCustomersArray[i].arakuCusineExpeirience;
            trip3Lunch.value = trip3PendingCustomersArray[i].lunch;
            trip3KatikiWaterfalls.value = trip3PendingCustomersArray[i].katikiWaterfalls;
            trip3RentARide.value = trip3PendingCustomersArray[i].rentARide;

            trip3DataBoxModal.style.display = "block"
        })
    }

    for (let i = 0; i < trip3PendingCustomersArray.length; i++) {
        const btn = document.getElementById(trip3PendingCustomersArray[i].updateBtnId);
        let selectId = document.getElementById(trip3PendingCustomersArray[i].selectId);

        btn.addEventListener('click', () => {
            let btnId = trip3PendingCustomersArray[i].updateBtnId;
            let docId = btnId.replace('updateButton', '');

            if (selectId.value != "pending") {
                db.collection("3dayTripBookings").doc(docId).update({
                    status: selectId.value,
                }).then(() => {
                    let parentDiv = document.getElementById(docId + "oneUserPending");
                    if (parentDiv != null) {
                        parentDiv.remove();
                        trip3PendingCustomersArray.splice(i, 1);
                        trip3UpdatePendingData();
                        trip3UpdateConfirmedData();
                        trip3UpdateCancelledData();
                        displayMessageBoxFunction("updated successfully");
                    }
                })
            } else {
                displayMessageBoxFunction("updated successfully");
            }
        })
    }
}


let trip3ConfirmedCustomersArray = [];
let trip3ConfirmedCustomersData = {};

function trip3ConfirmedDataFunction(doc) {
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

        trip3ConfirmedCustomersData["id"] = li.getAttribute('id');
        trip3ConfirmedCustomersData["customerName"] = doc.data().name;
        trip3ConfirmedCustomersData["phoneNumber"] = doc.data().phone_number;
        trip3ConfirmedCustomersData["email"] = doc.data().email;
        trip3ConfirmedCustomersData["checkIn"] = doc.data().checkIn;
        trip3ConfirmedCustomersData["checkOut"] = doc.data().checkOut;
        trip3ConfirmedCustomersData["adults"] = doc.data().adults;
        trip3ConfirmedCustomersData["children"] = doc.data().children;
        trip3ConfirmedCustomersData["infants"] = doc.data().infants;
        trip3ConfirmedCustomersData["rooms"] = doc.data().rooms;
        trip3ConfirmedCustomersData["roomsType"] = doc.data().room_type;
        trip3ConfirmedCustomersData["cabType"] = doc.data().cab_type;
        trip3ConfirmedCustomersData["lunch"] = doc.data().lunch;
        trip3ConfirmedCustomersData["firecamp"] = doc.data().firecamp;
        trip3ConfirmedCustomersData["dhimsDance"] = doc.data().dhims_Dance;
        trip3ConfirmedCustomersData["tent"] = doc.data().tent_For_Rent;
        trip3ConfirmedCustomersData["arakuCusineExpeirience"] = doc.data().araku_Cusine_Expeirience;
        trip3ConfirmedCustomersData["katikiWaterfalls"] = doc.data().katiki_Waterfalls;
        trip3ConfirmedCustomersData["rentARide"] = doc.data().rent_A_Ride;

        trip3ConfirmedCustomersData["updateBtnId"] = updateButton.getAttribute('id');
        trip3ConfirmedCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        trip3ConfirmedCustomersArray[trip3ConfirmedCustomersArray.length] = trip3ConfirmedCustomersData;

        // clear the customerData object
        trip3ConfirmedCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        statusBox.appendChild(updateButton);
        oneUser.append(statusBox);
        trip3DataConfirmed.prepend(oneUser);
    }
}

function trip3UpdateConfirmedData() {
    for (let i = 0; i < trip3ConfirmedCustomersArray.length; i++) {
        const customer = document.getElementById(trip3ConfirmedCustomersArray[i].id);
        if (customer != null) {
            customer.addEventListener('click', () => {
                trip3CustomerName.value = trip3ConfirmedCustomersArray[i].customerName;
                trip3Email.value = trip3ConfirmedCustomersArray[i].email;
                trip3PhoneNumber.value = trip3ConfirmedCustomersArray[i].phoneNumber;
                trip3CheckIn.value = trip3ConfirmedCustomersArray[i].checkIn;
                trip3CheckOut.value = trip3ConfirmedCustomersArray[i].checkOut;
                trip3AdultCount.value = trip3ConfirmedCustomersArray[i].adults;
                trip3ChildrenCount.value = trip3ConfirmedCustomersArray[i].children;
                trip3InfantsCount.value = trip3ConfirmedCustomersArray[i].infants;
                trip3RoomsCount.value = trip3ConfirmedCustomersArray[i].rooms;
                trip3RoomType.value = trip3ConfirmedCustomersArray[i].roomsType;
                trip3CabType.value = trip3ConfirmedCustomersArray[i].cabType;
                trip3Firecamp.value = trip3ConfirmedCustomersArray[i].firecamp;
                trip3Dance.value = trip3ConfirmedCustomersArray[i].dhimsDance;
                trip3Tent.value = trip3ConfirmedCustomersArray[i].tent;
                trip3Cuisine.value = trip3ConfirmedCustomersArray[i].arakuCusineExpeirience;
                trip3Lunch.value = trip3ConfirmedCustomersArray[i].lunch;
                trip3KatikiWaterfalls.value = trip3ConfirmedCustomersArray[i].katikiWaterfalls;
                trip3RentARide.value = trip3ConfirmedCustomersArray[i].rentARide;

                trip3DataBoxModal.style.display = "block"
            })
        }
    }

    for (let i = 0; i < trip3ConfirmedCustomersArray.length; i++) {
        const btn = document.getElementById(trip3ConfirmedCustomersArray[i].updateBtnId);
        let selectId = document.getElementById(trip3ConfirmedCustomersArray[i].selectId);
        if (btn != null) {
            btn.addEventListener('click', () => {
                let btnId = trip3ConfirmedCustomersArray[i].updateBtnId;
                let docId = btnId.replace('updateButton', '');

                if (selectId.value != "confirmed") {
                    db.collection("3dayTripBookings").doc(docId).update({
                        status: selectId.value,
                    }).then(() => {
                        let parentDiv = document.getElementById(docId + "oneUserConfirmed");
                        if (parentDiv != null) {
                            parentDiv.remove();
                            trip3ConfirmedCustomersArray.splice(i, 1);
                            trip3UpdateConfirmedData();
                            trip3UpdateCancelledData();
                            trip3UpdateCompletedData();
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

let trip3CancelledCustomersArray = [];
let trip3CancelledCustomersData = {};

function trip3CancelledDataFunction(doc) {
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

        trip3CancelledCustomersData["id"] = li.getAttribute('id');
        trip3CancelledCustomersData["customerName"] = doc.data().name;
        trip3CancelledCustomersData["phoneNumber"] = doc.data().phone_number;
        trip3CancelledCustomersData["email"] = doc.data().email;
        trip3CancelledCustomersData["checkIn"] = doc.data().checkIn;
        trip3CancelledCustomersData["checkOut"] = doc.data().checkOut;
        trip3CancelledCustomersData["adults"] = doc.data().adults;
        trip3CancelledCustomersData["children"] = doc.data().children;
        trip3CancelledCustomersData["infants"] = doc.data().infants;
        trip3CancelledCustomersData["rooms"] = doc.data().rooms;
        trip3CancelledCustomersData["roomsType"] = doc.data().room_type;
        trip3CancelledCustomersData["cabType"] = doc.data().cab_type;
        trip3CancelledCustomersData["lunch"] = doc.data().lunch;
        trip3CancelledCustomersData["firecamp"] = doc.data().firecamp;
        trip3CancelledCustomersData["dhimsDance"] = doc.data().dhims_Dance;
        trip3CancelledCustomersData["tent"] = doc.data().tent_For_Rent;
        trip3CancelledCustomersData["arakuCusineExpeirience"] = doc.data().araku_Cusine_Expeirience;
        trip3CancelledCustomersData["katikiWaterfalls"] = doc.data().katiki_Waterfalls;
        trip3CancelledCustomersData["rentARide"] = doc.data().rent_A_Ride;

        trip3CancelledCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        trip3CancelledCustomersArray[trip3CancelledCustomersArray.length] = trip3CancelledCustomersData;

        // clear the customerData object
        trip3CancelledCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        oneUser.append(statusBox);
        trip3DataCancelled.prepend(oneUser);
    }
}

function trip3UpdateCancelledData() {
    for (let i = 0; i < trip3CancelledCustomersArray.length; i++) {
        const customer = document.getElementById(trip3CancelledCustomersArray[i].id);
        customer.addEventListener('click', () => {
            trip3CustomerName.value = trip3CancelledCustomersArray[i].customerName;
            trip3Email.value = trip3CancelledCustomersArray[i].email;
            trip3PhoneNumber.value = trip3CancelledCustomersArray[i].phoneNumber;
            trip3CheckIn.value = trip3CancelledCustomersArray[i].checkIn;
            trip3CheckOut.value = trip3CancelledCustomersArray[i].checkOut;
            trip3AdultCount.value = trip3CancelledCustomersArray[i].adults;
            trip3ChildrenCount.value = trip3CancelledCustomersArray[i].children;
            trip3InfantsCount.value = trip3CancelledCustomersArray[i].infants;
            trip3RoomsCount.value = trip3CancelledCustomersArray[i].rooms;
            trip3RoomType.value = trip3CancelledCustomersArray[i].roomsType;
            trip3CabType.value = trip3CancelledCustomersArray[i].cabType;
            trip3Firecamp.value = trip3CancelledCustomersArray[i].firecamp;
            trip3Dance.value = trip3CancelledCustomersArray[i].dhimsDance;
            trip3Tent.value = trip3CancelledCustomersArray[i].tent;
            trip3Cuisine.value = trip3CancelledCustomersArray[i].arakuCusineExpeirience;
            trip3Lunch.value = trip3CancelledCustomersArray[i].lunch;
            trip3KatikiWaterfalls.value = trip3CancelledCustomersArray[i].katikiWaterfalls;
            trip3RentARide.value = trip3CancelledCustomersArray[i].rentARide;

            trip3DataBoxModal.style.display = "block"
        })
    }
}


let trip3CompletedCustomersArray = [];
let trip3CompletedCustomersData = {};

function trip3CompletedDataFunction(doc) {
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

        trip3CompletedCustomersData["id"] = li.getAttribute('id');
        trip3CompletedCustomersData["customerName"] = doc.data().name;
        trip3CompletedCustomersData["phoneNumber"] = doc.data().phone_number;
        trip3CompletedCustomersData["email"] = doc.data().email;
        trip3CompletedCustomersData["checkIn"] = doc.data().checkIn;
        trip3CompletedCustomersData["checkOut"] = doc.data().checkOut;
        trip3CompletedCustomersData["adults"] = doc.data().adults;
        trip3CompletedCustomersData["children"] = doc.data().children;
        trip3CompletedCustomersData["infants"] = doc.data().infants;
        trip3CompletedCustomersData["rooms"] = doc.data().rooms;
        trip3CompletedCustomersData["roomsType"] = doc.data().room_type;
        trip3CompletedCustomersData["cabType"] = doc.data().cab_type;
        trip3CompletedCustomersData["lunch"] = doc.data().lunch;
        trip3CompletedCustomersData["firecamp"] = doc.data().firecamp;
        trip3CompletedCustomersData["dhimsDance"] = doc.data().dhims_Dance;
        trip3CompletedCustomersData["tent"] = doc.data().tent_For_Rent;
        trip3CompletedCustomersData["arakuCusineExpeirience"] = doc.data().araku_Cusine_Expeirience;
        trip3CompletedCustomersData["katikiWaterfalls"] = doc.data().katiki_Waterfalls;
        trip3CompletedCustomersData["rentARide"] = doc.data().rent_A_Ride;

        trip3CompletedCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        trip3CompletedCustomersArray[trip3CompletedCustomersArray.length] = trip3CompletedCustomersData;

        // clear the customerData object
        trip3CompletedCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        oneUser.append(statusBox);
        trip3DataCompleted.prepend(oneUser);
    }
}

function trip3UpdateCompletedData() {
    for (let i = 0; i < trip3CompletedCustomersArray.length; i++) {
        const customer = document.getElementById(trip3CompletedCustomersArray[i].id);
        customer.addEventListener('click', () => {
            trip3CustomerName.value = trip3CompletedCustomersArray[i].customerName;
            trip3Email.value = trip3CompletedCustomersArray[i].email;
            trip3PhoneNumber.value = trip3CompletedCustomersArray[i].phoneNumber;
            trip3CheckIn.value = trip3CompletedCustomersArray[i].checkIn;
            trip3CheckOut.value = trip3CompletedCustomersArray[i].checkOut;
            trip3AdultCount.value = trip3CompletedCustomersArray[i].adults;
            trip3ChildrenCount.value = trip3CompletedCustomersArray[i].children;
            trip3InfantsCount.value = trip3CompletedCustomersArray[i].infants;
            trip3RoomsCount.value = trip3CompletedCustomersArray[i].rooms;
            trip3RoomType.value = trip3CompletedCustomersArray[i].roomsType;
            trip3CabType.value = trip3CompletedCustomersArray[i].cabType;
            trip3Firecamp.value = trip3CompletedCustomersArray[i].firecamp;
            trip3Dance.value = trip3CompletedCustomersArray[i].dhimsDance;
            trip3Tent.value = trip3CompletedCustomersArray[i].tent;
            trip3Cuisine.value = trip3CompletedCustomersArray[i].arakuCusineExpeirience;
            trip3Lunch.value = trip3CompletedCustomersArray[i].lunch;
            trip3KatikiWaterfalls.value = trip3CompletedCustomersArray[i].katikiWaterfalls;
            trip3RentARide.value = trip3CompletedCustomersArray[i].rentARide;

            trip3DataBoxModal.style.display = "block"
        })
    }
}


trip3CloseBtn.addEventListener('click', trip3closeBox)
function trip3closeBox() {
    trip3DataBoxModal.style.display = "none";
}

function trip3BookingsFunction() {
    if (auth.currentUser == null) { return }
    db.collection("3dayTripBookings").orderBy("timeStamp").onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type === "added") {
                trip3PendingDataFunction(change.doc);
                trip3ConfirmedDataFunction(change.doc);
                trip3CancelledDataFunction(change.doc);
                trip3CompletedDataFunction(change.doc);
            }
            if (change.type === "modified") {
                if (change.doc.data().status == "confirmed") {
                    trip3ConfirmedDataFunction(change.doc);
                }
                if (change.doc.data().status == "cancelled") {
                    trip3CancelledDataFunction(change.doc);
                }
                if (change.doc.data().status == "completed") {
                    trip3CompletedDataFunction(change.doc);
                }
            }
        });
        trip3UpdatePendingData();
        trip3UpdateConfirmedData();
        trip3UpdateCancelledData();
        trip3UpdateCompletedData();
    })    
}
