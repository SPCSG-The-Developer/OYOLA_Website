// adult count

let trip3AddAdult = document.querySelector('#trip3AddAdult');
let trip3SubAdult = document.querySelector('#trip3SubAdult');

let trip3Count1 = 0;

let trip3AdultCount = document.querySelector('#trip3AdultCount');

trip3AddAdult.addEventListener('click', () => {
    trip3AdultCount.innerHTML = ++trip3Count1;
});

trip3SubAdult.addEventListener('click', () => {
    if (trip3AdultCount.innerHTML == 0)
        return;
    trip3AdultCount.innerHTML = --trip3Count1;
});

// children count

let trip3AddChildren = document.querySelector('#trip3AddChildren');
let trip3SubChildren = document.querySelector('#trip3SubChildren');

let trip3Count2 = 0;

let trip3ChildrenCount = document.querySelector('#trip3ChildrenCount');

trip3AddChildren.addEventListener('click', () => {
    trip3ChildrenCount.innerHTML = ++trip3Count2;
});

trip3SubChildren.addEventListener('click', () => {
    if (trip3ChildrenCount.innerHTML == 0)
        return;
    trip3ChildrenCount.innerHTML = --trip3Count2;
});

// infants count

let trip3AddInfants = document.querySelector('#trip3AddInfants');
let trip3SubInfants = document.querySelector('#trip3SubInfants');

let trip3Count3 = 0;

let trip3InfantsCount = document.querySelector('#trip3InfantsCount');

trip3AddInfants.addEventListener('click', () => {
    trip3InfantsCount.innerHTML = ++trip3Count3;
});

trip3SubInfants.addEventListener('click', () => {
    if (trip3InfantsCount.innerHTML == 0)
        return;
    trip3InfantsCount.innerHTML = --trip3Count3;
});


// rooms count

let trip3addRooms = document.querySelector('#trip3addRooms');
let trip3SubRooms = document.querySelector('#trip3SubRooms');

count4 = 0;

let trip3RoomsCount = document.querySelector('#trip3RoomsCount');

trip3addRooms.addEventListener('click', () => {
    trip3RoomsCount.innerHTML = ++count4;
});

trip3SubRooms.addEventListener('click', () => {
    if (trip3RoomsCount.innerHTML == 0)
        return;
    trip3RoomsCount.innerHTML = --count4;
});

// getting info

let trip3Form = document.querySelector('.travellerInformationOfTrip3');

let trip3Date = new Date();
let validMobileNumberExpression = "^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[6789]\\d{9}$";

// check in date
trip3Form['check-in'].valueAsDate = new Date();
// check out date
trip3Form['check-out'].valueAsDate = new Date(trip3Date.setDate(trip3Date.getDate() + 2));

trip3Form.addEventListener('submit', (e) => {

    if (auth.currentUser == null) {
        displayMessageBoxFunction('Sign up or Log in to continue')
        signUpFunction();
    }
    
    e.preventDefault();

    // check-in info
    let checkInDate = trip3Form['check-in'].value;
    // check-out info
    let checkOutDate = trip3Form['check-out'].value;
    // booking mail address
    let bookingEmail = trip3Form['booking-email'].value;
    // mobile number for contact
    let mobileNumber = trip3Form['mobile-number'].value;
    // adults count
    let trip3Adults = trip3AdultCount.innerHTML;
    // children count
    let trip3Children = trip3ChildrenCount.innerHTML;
    // infants count
    let trip3Infants = trip3InfantsCount.innerHTML;
    // rooms count
    let trip3Rooms = trip3RoomsCount.innerHTML;
    // cab type
    let cabType = trip3Form['cab-type'].value;
    // room type
    let AC = (trip3Form['acRoom'].checked) ? true : false;
    let nonAC = (trip3Form['non-acRoom'].checked) ? true : false;
    let roomType;
    // add ons info
    let fireCamps = (trip3Form['switch1'].checked) ? true : false;
    let dhimsaDance = (trip3Form['switch2'].checked) ? true : false;
    let tentForRent = (trip3Form['switch3'].checked) ? true : false;
    let arakuCuisineExperience = (trip3Form['switch4'].checked) ? true : false;
    let lunch = (trip3Form['switch5'].checked) ? true : false;
    let katikiWaterfalls = (trip3Form['switch6'].checked) ? true : false;
    let rentARide = (trip3Form['switch7'].checked) ? true : false;
    // error text box
    let trip3Error = '';
    let errorflag = false;

    // validation

    if (checkInDate > checkOutDate) {
        errorflag = true;
        trip3Error += '<li style="background-color:transparent">check-out date is too earlier than check-in</li>';
    }
    if (!mobileNumber.match(validMobileNumberExpression)) {
        errorflag = true;
        trip3Error += '<li style="background-color:transparent">Invalid mobile number</li>';
    }
    if (trip3Adults == 0 && trip3Children == 0 && trip3Infants == 0) {
        errorflag = true;
        trip3Error += '<li style="background-color:transparent">Add Guests</li>';
    }
    if (trip3Adults == 0) {
        errorflag = true;
        trip3Error += '<li style="background-color:transparent">Add minimum 1 adult</li>';
    }
    if (trip3Rooms == 0) {
        errorflag = true;
        trip3Error += '<li style="background-color:transparent">Rooms count not provided</li>';
    }
    if (AC == false && nonAC == false) {
        errorflag = true;
        trip3Error += '<li style="background-color:transparent">Select Room type</li>';
    } else {
        roomType = (trip3Form['acRoom'].checked) ? "AC" : "Non-AC";
    }

    // error display function
    if (errorflag) {
        displayMessageBoxFunction(trip3Error);
        return;
    }

    let trip3BookingDetails = {
        checkInDate3: checkInDate,
        checkOutDate3: checkOutDate,
        bookingEmail3: bookingEmail,
        mobileNumber3: mobileNumber,
        trip3Adults3: trip3Adults,
        trip3Children3: trip3Children,
        trip3Infants3: trip3Infants,
        trip3Rooms3: trip3Rooms,
        trip3RoomType: roomType,
        cabType3: cabType,
        lunch3: lunch ? "selected" : "Not selected",
        fireCamps3: fireCamps ? "selected" : "Not selected",
        dhimsaDance3: dhimsaDance ? "selected" : "Not selected",
        tentForRent3: tentForRent ? "selected" : "Not selected",
        arakuCuisineExperience3: arakuCuisineExperience ? "selected" : "Not selected",
        katikiWaterfalls3: katikiWaterfalls ? "selected" : "Not selected",
        rentARide3: rentARide ?  "selected" : "Not selected",
    }

    requesting3DayTrip(trip3BookingDetails);
})


