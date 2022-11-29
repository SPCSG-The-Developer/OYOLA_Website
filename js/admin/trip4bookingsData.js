const trip4DataPending = document.getElementById("trip4DataPending");
const trip4DataConfirmed = document.getElementById("trip4DataConfirmed");
const trip4DataCancelled = document.getElementById("trip4DataCancelled");
const trip4DataCompleted = document.getElementById("trip4DataCompleted");

const trip4DataBoxModal = document.getElementById("hiddenBoxTrip4");
const trip4CloseBtn = document.getElementById("trip4Close");

let trip4CustomerName = document.getElementById("trip4-name");
let trip4Email = document.getElementById("trip4-email");
let trip4PhoneNumber = document.getElementById("trip4-phoneNumber");
let trip4CheckIn = document.getElementById("trip4-check-in");
let trip4CheckOut = document.getElementById("trip4-check-out");
let trip4AdultCount = document.getElementById("trip4-adult-count");
let trip4ChildrenCount = document.getElementById("trip4-children-count");
let trip4InfantsCount = document.getElementById("trip4-infants-count");
let trip4RoomsCount = document.getElementById("trip4-rooms-count");
let trip4RoomType = document.getElementById("trip4-rooms-type");
let trip4CabType = document.getElementById("trip4-cab-type");
let trip4Firecamp = document.getElementById("trip4-firecamp");
let trip4Dance = document.getElementById("trip4-dhimsa-dance");
let trip4Tent = document.getElementById("trip4-tent-for-rent");
let trip4Cuisine = document.getElementById("trip4-Araku-cuisine-experience");
let trip4Lunch = document.getElementById("trip4Lunch");
let trip4KatikiWaterfalls = document.getElementById("trip4Katiki-waterfalls");
let trip4RentARide = document.getElementById("trip4RentARide");
let trip4Trecking = document.getElementById("trip4Trecking");

let trip4Status = document.getElementById("status");

let trip4PendingCustomersArray = [];
let trip4PendingCustomersData = {};

function trip4PendingDataFunction(doc) {

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

        trip4PendingCustomersData["id"] = li.getAttribute('id');
        trip4PendingCustomersData["customerName"] = doc.data().name;
        trip4PendingCustomersData["phoneNumber"] = doc.data().phone_number;
        trip4PendingCustomersData["email"] = doc.data().email;
        trip4PendingCustomersData["checkIn"] = doc.data().checkIn;
        trip4PendingCustomersData["checkOut"] = doc.data().checkOut;
        trip4PendingCustomersData["adults"] = doc.data().adults;
        trip4PendingCustomersData["children"] = doc.data().children;
        trip4PendingCustomersData["infants"] = doc.data().infants;
        trip4PendingCustomersData["rooms"] = doc.data().rooms;
        trip4PendingCustomersData["roomsType"] = doc.data().room_type;
        trip4PendingCustomersData["cabType"] = doc.data().cab_type;
        trip4PendingCustomersData["lunch"] = doc.data().lunch;
        trip4PendingCustomersData["firecamp"] = doc.data().firecamp;
        trip4PendingCustomersData["dhimsDance"] = doc.data().dhims_Dance;
        trip4PendingCustomersData["tent"] = doc.data().tent_For_Rent;
        trip4PendingCustomersData["arakuCusineExpeirience"] = doc.data().araku_Cusine_Expeirience;
        trip4PendingCustomersData["katikiWaterfalls"] = doc.data().katiki_Waterfalls;
        trip4PendingCustomersData["rentARide"] = doc.data().rent_A_Ride;
        trip4PendingCustomersData["trecking"] = doc.data().trecking;

        trip4PendingCustomersData["updateBtnId"] = updateButton.getAttribute('id');
        trip4PendingCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        trip4PendingCustomersArray[trip4PendingCustomersArray.length] = trip4PendingCustomersData;

        // clear the customerData object
        trip4PendingCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        statusBox.appendChild(updateButton);
        oneUser.append(statusBox);
        trip4DataPending.prepend(oneUser);
    }
}

function trip4UpdatePendingData() {
    for (let i = 0; i < trip4PendingCustomersArray.length; i++) {
        const customer = document.getElementById(trip4PendingCustomersArray[i].id);
        customer.addEventListener('click', () => {
            trip4CustomerName.value = trip4PendingCustomersArray[i].customerName;
            trip4Email.value = trip4PendingCustomersArray[i].email;
            trip4PhoneNumber.value = trip4PendingCustomersArray[i].phoneNumber;
            trip4CheckIn.value = trip4PendingCustomersArray[i].checkIn;
            trip4CheckOut.value = trip4PendingCustomersArray[i].checkOut;
            trip4AdultCount.value = trip4PendingCustomersArray[i].adults;
            trip4ChildrenCount.value = trip4PendingCustomersArray[i].children;
            trip4InfantsCount.value = trip4PendingCustomersArray[i].infants;
            trip4RoomsCount.value = trip4PendingCustomersArray[i].rooms;
            trip4RoomType.value = trip4PendingCustomersArray[i].roomsType;
            trip4CabType.value = trip4PendingCustomersArray[i].cabType;
            trip4Firecamp.value = trip4PendingCustomersArray[i].firecamp;
            trip4Dance.value = trip4PendingCustomersArray[i].dhimsDance;
            trip4Tent.value = trip4PendingCustomersArray[i].tent;
            trip4Cuisine.value = trip4PendingCustomersArray[i].arakuCusineExpeirience;
            trip4Lunch.value = trip4PendingCustomersArray[i].lunch;
            trip4KatikiWaterfalls.value = trip4PendingCustomersArray[i].katikiWaterfalls;
            trip4RentARide.value = trip4PendingCustomersArray[i].rentARide;
            trip4Trecking.value = trip4PendingCustomersArray[i].trecking;

            trip4DataBoxModal.style.display = "block"
        })
    }

    for (let i = 0; i < trip4PendingCustomersArray.length; i++) {
        const btn = document.getElementById(trip4PendingCustomersArray[i].updateBtnId);
        let selectId = document.getElementById(trip4PendingCustomersArray[i].selectId);

        btn.addEventListener('click', () => {
            let btnId = trip4PendingCustomersArray[i].updateBtnId;
            let docId = btnId.replace('updateButton', '');

            if (selectId.value != "pending") {
                db.collection("4dayTripBookings").doc(docId).update({
                    status: selectId.value,
                }).then(() => {
                    let parentDiv = document.getElementById(docId + "oneUserPending");
                    if (parentDiv != null) {
                        parentDiv.remove();
                        trip4PendingCustomersArray.splice(i, 1);
                        trip4UpdatePendingData();
                        trip4UpdateConfirmedData();
                        trip4UpdateCancelledData();
                        displayMessageBoxFunction("updated successfully");
                    }
                })
            } else {
                displayMessageBoxFunction("updated successfully");
            }
        })
    }
}


let trip4ConfirmedCustomersArray = [];
let trip4ConfirmedCustomersData = {};

function trip4ConfirmedDataFunction(doc) {
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

        trip4ConfirmedCustomersData["id"] = li.getAttribute('id');
        trip4ConfirmedCustomersData["customerName"] = doc.data().name;
        trip4ConfirmedCustomersData["phoneNumber"] = doc.data().phone_number;
        trip4ConfirmedCustomersData["email"] = doc.data().email;
        trip4ConfirmedCustomersData["checkIn"] = doc.data().checkIn;
        trip4ConfirmedCustomersData["checkOut"] = doc.data().checkOut;
        trip4ConfirmedCustomersData["adults"] = doc.data().adults;
        trip4ConfirmedCustomersData["children"] = doc.data().children;
        trip4ConfirmedCustomersData["infants"] = doc.data().infants;
        trip4ConfirmedCustomersData["rooms"] = doc.data().rooms;
        trip4ConfirmedCustomersData["roomsType"] = doc.data().room_type;
        trip4ConfirmedCustomersData["cabType"] = doc.data().cab_type;
        trip4ConfirmedCustomersData["lunch"] = doc.data().lunch;
        trip4ConfirmedCustomersData["firecamp"] = doc.data().firecamp;
        trip4ConfirmedCustomersData["dhimsDance"] = doc.data().dhims_Dance;
        trip4ConfirmedCustomersData["tent"] = doc.data().tent_For_Rent;
        trip4ConfirmedCustomersData["arakuCusineExpeirience"] = doc.data().araku_Cusine_Expeirience;
        trip4ConfirmedCustomersData["katikiWaterfalls"] = doc.data().katiki_Waterfalls;
        trip4ConfirmedCustomersData["rentARide"] = doc.data().rent_A_Ride;
        trip4ConfirmedCustomersData["trecking"] = doc.data().trecking;

        trip4ConfirmedCustomersData["updateBtnId"] = updateButton.getAttribute('id');
        trip4ConfirmedCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        trip4ConfirmedCustomersArray[trip4ConfirmedCustomersArray.length] = trip4ConfirmedCustomersData;

        // clear the customerData object
        trip4ConfirmedCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        statusBox.appendChild(updateButton);
        oneUser.append(statusBox);
        trip4DataConfirmed.prepend(oneUser);
    }
}

function trip4UpdateConfirmedData() {
    for (let i = 0; i < trip4ConfirmedCustomersArray.length; i++) {
        const customer = document.getElementById(trip4ConfirmedCustomersArray[i].id);
        if (customer != null) {
            customer.addEventListener('click', () => {
                trip4CustomerName.value = trip4ConfirmedCustomersArray[i].customerName;
                trip4Email.value = trip4ConfirmedCustomersArray[i].email;
                trip4PhoneNumber.value = trip4ConfirmedCustomersArray[i].phoneNumber;
                trip4CheckIn.value = trip4ConfirmedCustomersArray[i].checkIn;
                trip4CheckOut.value = trip4ConfirmedCustomersArray[i].checkOut;
                trip4AdultCount.value = trip4ConfirmedCustomersArray[i].adults;
                trip4ChildrenCount.value = trip4ConfirmedCustomersArray[i].children;
                trip4InfantsCount.value = trip4ConfirmedCustomersArray[i].infants;
                trip4RoomsCount.value = trip4ConfirmedCustomersArray[i].rooms;
                trip4RoomType.value = trip4ConfirmedCustomersArray[i].roomsType;
                trip4CabType.value = trip4ConfirmedCustomersArray[i].cabType;
                trip4Firecamp.value = trip4ConfirmedCustomersArray[i].firecamp;
                trip4Dance.value = trip4ConfirmedCustomersArray[i].dhimsDance;
                trip4Tent.value = trip4ConfirmedCustomersArray[i].tent;
                trip4Cuisine.value = trip4ConfirmedCustomersArray[i].arakuCusineExpeirience;
                trip4Lunch.value = trip4ConfirmedCustomersArray[i].lunch;
                trip4KatikiWaterfalls.value = trip4ConfirmedCustomersArray[i].katikiWaterfalls;
                trip4RentARide.value = trip4ConfirmedCustomersArray[i].rentARide;
                trip4Trecking.value = trip4ConfirmedCustomersArray[i].trecking;

                trip4DataBoxModal.style.display = "block"
            })
        }
    }

    for (let i = 0; i < trip4ConfirmedCustomersArray.length; i++) {
        const btn = document.getElementById(trip4ConfirmedCustomersArray[i].updateBtnId);
        let selectId = document.getElementById(trip4ConfirmedCustomersArray[i].selectId);
        if (btn != null) {
            btn.addEventListener('click', () => {
                let btnId = trip4ConfirmedCustomersArray[i].updateBtnId;
                let docId = btnId.replace('updateButton', '');

                if (selectId.value != "confirmed") {
                    db.collection("4dayTripBookings").doc(docId).update({
                        status: selectId.value,
                    }).then(() => {
                        let parentDiv = document.getElementById(docId + "oneUserConfirmed");
                        if (parentDiv != null) {
                            parentDiv.remove();
                            trip4ConfirmedCustomersArray.splice(i, 1);
                            trip4UpdateConfirmedData();
                            trip4UpdateCancelledData();
                            trip4UpdateCompletedData();
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

let trip4CancelledCustomersArray = [];
let trip4CancelledCustomersData = {};

function trip4CancelledDataFunction(doc) {
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

        trip4CancelledCustomersData["id"] = li.getAttribute('id');
        trip4CancelledCustomersData["customerName"] = doc.data().name;
        trip4CancelledCustomersData["phoneNumber"] = doc.data().phone_number;
        trip4CancelledCustomersData["email"] = doc.data().email;
        trip4CancelledCustomersData["checkIn"] = doc.data().checkIn;
        trip4CancelledCustomersData["checkOut"] = doc.data().checkOut;
        trip4CancelledCustomersData["adults"] = doc.data().adults;
        trip4CancelledCustomersData["children"] = doc.data().children;
        trip4CancelledCustomersData["infants"] = doc.data().infants;
        trip4CancelledCustomersData["rooms"] = doc.data().rooms;
        trip4CancelledCustomersData["roomsType"] = doc.data().room_type;
        trip4CancelledCustomersData["cabType"] = doc.data().cab_type;
        trip4CancelledCustomersData["lunch"] = doc.data().lunch;
        trip4CancelledCustomersData["firecamp"] = doc.data().firecamp;
        trip4CancelledCustomersData["dhimsDance"] = doc.data().dhims_Dance;
        trip4CancelledCustomersData["tent"] = doc.data().tent_For_Rent;
        trip4CancelledCustomersData["arakuCusineExpeirience"] = doc.data().araku_Cusine_Expeirience;
        trip4CancelledCustomersData["katikiWaterfalls"] = doc.data().katiki_Waterfalls;
        trip4CancelledCustomersData["rentARide"] = doc.data().rent_A_Ride;
        trip4CancelledCustomersData["trecking"] = doc.data().trecking;

        trip4CancelledCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        trip4CancelledCustomersArray[trip4CancelledCustomersArray.length] = trip4CancelledCustomersData;

        // clear the customerData object
        trip4CancelledCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        oneUser.append(statusBox);
        trip4DataCancelled.prepend(oneUser);
    }
}

function trip4UpdateCancelledData() {
    for (let i = 0; i < trip4CancelledCustomersArray.length; i++) {
        const customer = document.getElementById(trip4CancelledCustomersArray[i].id);
        customer.addEventListener('click', () => {
            trip4CustomerName.value = trip4CancelledCustomersArray[i].customerName;
            trip4Email.value = trip4CancelledCustomersArray[i].email;
            trip4PhoneNumber.value = trip4CancelledCustomersArray[i].phoneNumber;
            trip4CheckIn.value = trip4CancelledCustomersArray[i].checkIn;
            trip4CheckOut.value = trip4CancelledCustomersArray[i].checkOut;
            trip4AdultCount.value = trip4CancelledCustomersArray[i].adults;
            trip4ChildrenCount.value = trip4CancelledCustomersArray[i].children;
            trip4InfantsCount.value = trip4CancelledCustomersArray[i].infants;
            trip4RoomsCount.value = trip4CancelledCustomersArray[i].rooms;
            trip4RoomType.value = trip4CancelledCustomersArray[i].roomsType;
            trip4CabType.value = trip4CancelledCustomersArray[i].cabType;
            trip4Firecamp.value = trip4CancelledCustomersArray[i].firecamp;
            trip4Dance.value = trip4CancelledCustomersArray[i].dhimsDance;
            trip4Tent.value = trip4CancelledCustomersArray[i].tent;
            trip4Cuisine.value = trip4CancelledCustomersArray[i].arakuCusineExpeirience;
            trip4Lunch.value = trip4CancelledCustomersArray[i].lunch;
            trip4KatikiWaterfalls.value = trip4CancelledCustomersArray[i].katikiWaterfalls;
            trip4RentARide.value = trip4CancelledCustomersArray[i].rentARide;
            trip4Trecking.value = trip4CancelledCustomersArray[i].trecking;

            trip4DataBoxModal.style.display = "block"
        })
    }
}


let trip4CompletedCustomersArray = [];
let trip4CompletedCustomersData = {};

function trip4CompletedDataFunction(doc) {
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

        trip4CompletedCustomersData["id"] = li.getAttribute('id');
        trip4CompletedCustomersData["customerName"] = doc.data().name;
        trip4CompletedCustomersData["phoneNumber"] = doc.data().phone_number;
        trip4CompletedCustomersData["email"] = doc.data().email;
        trip4CompletedCustomersData["checkIn"] = doc.data().checkIn;
        trip4CompletedCustomersData["checkOut"] = doc.data().checkOut;
        trip4CompletedCustomersData["adults"] = doc.data().adults;
        trip4CompletedCustomersData["children"] = doc.data().children;
        trip4CompletedCustomersData["infants"] = doc.data().infants;
        trip4CompletedCustomersData["rooms"] = doc.data().rooms;
        trip4CompletedCustomersData["roomsType"] = doc.data().room_type;
        trip4CompletedCustomersData["cabType"] = doc.data().cab_type;
        trip4CompletedCustomersData["lunch"] = doc.data().lunch;
        trip4CompletedCustomersData["firecamp"] = doc.data().firecamp;
        trip4CompletedCustomersData["dhimsDance"] = doc.data().dhims_Dance;
        trip4CompletedCustomersData["tent"] = doc.data().tent_For_Rent;
        trip4CompletedCustomersData["arakuCusineExpeirience"] = doc.data().araku_Cusine_Expeirience;
        trip4CompletedCustomersData["katikiWaterfalls"] = doc.data().katiki_Waterfalls;
        trip4CompletedCustomersData["rentARide"] = doc.data().rent_A_Ride;
        trip4CompletedCustomersData["trecking"] = doc.data().trecking;

        trip4CompletedCustomersData["selectId"] = select.getAttribute('id');

        // sending data to array
        trip4CompletedCustomersArray[trip4CompletedCustomersArray.length] = trip4CompletedCustomersData;

        // clear the customerData object
        trip4CompletedCustomersData = {}

        li.textContent = doc.data().email;

        oneUser.prepend(li)
        statusBox.appendChild(select);
        oneUser.append(statusBox);
        trip4DataCompleted.prepend(oneUser);
    }
}

function trip4UpdateCompletedData() {
    for (let i = 0; i < trip4CompletedCustomersArray.length; i++) {
        const customer = document.getElementById(trip4CompletedCustomersArray[i].id);
        customer.addEventListener('click', () => {
            trip4CustomerName.value = trip4CompletedCustomersArray[i].customerName;
            trip4Email.value = trip4CompletedCustomersArray[i].email;
            trip4PhoneNumber.value = trip4CompletedCustomersArray[i].phoneNumber;
            trip4CheckIn.value = trip4CompletedCustomersArray[i].checkIn;
            trip4CheckOut.value = trip4CompletedCustomersArray[i].checkOut;
            trip4AdultCount.value = trip4CompletedCustomersArray[i].adults;
            trip4ChildrenCount.value = trip4CompletedCustomersArray[i].children;
            trip4InfantsCount.value = trip4CompletedCustomersArray[i].infants;
            trip4RoomsCount.value = trip4CompletedCustomersArray[i].rooms;
            trip4RoomType.value = trip4CompletedCustomersArray[i].roomsType;
            trip4CabType.value = trip4CompletedCustomersArray[i].cabType;
            trip4Firecamp.value = trip4CompletedCustomersArray[i].firecamp;
            trip4Dance.value = trip4CompletedCustomersArray[i].dhimsDance;
            trip4Tent.value = trip4CompletedCustomersArray[i].tent;
            trip4Cuisine.value = trip4CompletedCustomersArray[i].arakuCusineExpeirience;
            trip4Lunch.value = trip4CompletedCustomersArray[i].lunch;
            trip4KatikiWaterfalls.value = trip4CompletedCustomersArray[i].katikiWaterfalls;
            trip4RentARide.value = trip4CompletedCustomersArray[i].rentARide;
            trip4Trecking.value = trip4CompletedCustomersArray[i].trecking;

            trip4DataBoxModal.style.display = "block"
        })
    }
}


trip4CloseBtn.addEventListener('click', trip4closeBox)
function trip4closeBox() {
    trip4DataBoxModal.style.display = "none";
}

function trip4BookingsFunction() {
    if (auth.currentUser == null) { return }
    db.collection("4dayTripBookings").orderBy("timeStamp").onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type === "added") {
                trip4PendingDataFunction(change.doc);
                trip4ConfirmedDataFunction(change.doc);
                trip4CancelledDataFunction(change.doc);
                trip4CompletedDataFunction(change.doc);
            }
            if (change.type === "modified") {
                if (change.doc.data().status == "confirmed") {
                    trip4ConfirmedDataFunction(change.doc);
                }
                if (change.doc.data().status == "cancelled") {
                    trip4CancelledDataFunction(change.doc);
                }
                if (change.doc.data().status == "completed") {
                    trip4CompletedDataFunction(change.doc);
                }
            }
        });
        trip4UpdatePendingData();
        trip4UpdateConfirmedData();
        trip4UpdateCancelledData();
        trip4UpdateCompletedData();
    })
}



