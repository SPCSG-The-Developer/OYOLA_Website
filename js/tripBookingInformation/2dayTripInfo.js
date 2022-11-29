// adult count

let trip2AddAdult = document.querySelector('#trip2AddAdult');
let trip2SubAdult = document.querySelector('#trip2SubAdult');

let trip2Count1 = 0;

let trip2AdultCount = document.querySelector('#trip2AdultCount');

trip2AddAdult.addEventListener('click', () => {
    trip2AdultCount.innerHTML = ++trip2Count1;
});

trip2SubAdult.addEventListener('click', () => {
    if (trip2AdultCount.innerHTML == 0)
        return;
    trip2AdultCount.innerHTML = --trip2Count1;
});

// children count

let trip2AddChildren = document.querySelector('#trip2AddChildren');
let trip2SubChildren = document.querySelector('#trip2SubChildren');

let trip2Count2 = 0;

let trip2ChildrenCount = document.querySelector('#trip2ChildrenCount');

trip2AddChildren.addEventListener('click', () => {
    trip2ChildrenCount.innerHTML = ++trip2Count2;
});

trip2SubChildren.addEventListener('click', () => {
    if (trip2ChildrenCount.innerHTML == 0)
        return;
    trip2ChildrenCount.innerHTML = --trip2Count2;
});

// infants count

let trip2AddInfants = document.querySelector('#trip2AddInfants');
let trip2SubInfants = document.querySelector('#trip2SubInfants');

let trip2Count3 = 0;

let trip2InfantsCount = document.querySelector('#trip2InfantsCount');

trip2AddInfants.addEventListener('click', () => {
    trip2InfantsCount.innerHTML = ++trip2Count3;
});

trip2SubInfants.addEventListener('click', () => {
    if (trip2InfantsCount.innerHTML == 0)
        return;
    trip2InfantsCount.innerHTML = --trip2Count3;
});


// rooms count

let trip2addRooms = document.querySelector('#trip2addRooms');
let trip2SubRooms = document.querySelector('#trip2SubRooms');

count4 = 0;

let trip2RoomsCount = document.querySelector('#trip2RoomsCount');

trip2addRooms.addEventListener('click', () => {
    trip2RoomsCount.innerHTML = ++count4;
});

trip2SubRooms.addEventListener('click', () => {
    if (trip2RoomsCount.innerHTML == 0)
        return;
    trip2RoomsCount.innerHTML = --count4;
});

// getting info

let trip2Form = document.querySelector('.travellerInformationOfTrip2');

let trip2Date = new Date();
let validMobileNumberExpression = "^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[6789]\\d{9}$";

// check in date
trip2Form['check-in'].valueAsDate = new Date();
// check out date
trip2Form['check-out'].valueAsDate = new Date(trip2Date.setDate(trip2Date.getDate() + 1));

trip2Form.addEventListener('submit', (e) => {

    if (auth.currentUser == null) {
        displayMessageBoxFunction('Sign up or Log in to continue')
        signUpFunction();
    }
    
    e.preventDefault();

    // check-in info
    let checkInDate = trip2Form['check-in'].value;
    // check-out info
    let checkOutDate = trip2Form['check-out'].value;
    // booking mail address
    let bookingEmail = trip2Form['booking-email'].value;
    // mobile number for contact
    let mobileNumber = trip2Form['mobile-number'].value;
    // adults count
    let trip2Adults = trip2AdultCount.innerHTML;
    // children count
    let trip2Children = trip2ChildrenCount.innerHTML;
    // infants count
    let trip2Infants = trip2InfantsCount.innerHTML;
    // rooms count
    let trip2Rooms = trip2RoomsCount.innerHTML;
    // cab type
    let cabType = trip2Form['cab-type'].value;
    // room type
    let AC = (trip2Form['acRoom'].checked) ? true : false;
    let nonAC = (trip2Form['non-acRoom'].checked) ? true : false;
    let roomType;
    // add ons info
    let fireCamps = (trip2Form['switch1'].checked) ? true : false;
    let dhimsaDance = (trip2Form['switch2'].checked) ? true : false;
    let tentForRent = (trip2Form['switch3'].checked) ? true : false;
    let arakuCuisineExperience = (trip2Form['switch4'].checked) ? true : false;
    let lunch = (trip2Form['switch5'].checked) ? true : false;
    let katikiWaterfalls = (trip2Form['switch6'].checked) ? true : false;
    // error text box
    let trip2Error = '';
    let errorflag = false;

    // validation

    if (checkInDate > checkOutDate) {
        errorflag = true;
        trip2Error += '<li style="background-color:transparent">check-out date is too earlier than check-in</li>';
    }
    if (!mobileNumber.match(validMobileNumberExpression)) {
        errorflag = true;
        trip2Error += '<li style="background-color:transparent">Invalid mobile number</li>';
    }
    if (trip2Adults == 0 && trip2Children == 0 && trip2Infants == 0) {
        errorflag = true;
        trip2Error += '<li style="background-color:transparent">Add Guests</li>';
    }
    if (trip2Adults == 0) {
        errorflag = true;
        trip2Error += '<li style="background-color:transparent">Add minimum 1 adult</li>';
    }
    if (trip2Rooms == 0) {
        errorflag = true;
        trip2Error += '<li style="background-color:transparent">Rooms count not provided</li>';
    }
    if (AC == false && nonAC == false) {
        errorflag = true;
        trip2Error += '<li style="background-color:transparent">Select Room type</li>';
    } else {
        roomType = (trip2Form['acRoom'].checked) ? "AC" : "Non-AC";
    }

    // error display function
    if (errorflag) {
        displayMessageBoxFunction(trip2Error);
        return
    }

    let trip2BookingDetails = {
        checkInDate2: checkInDate,
        checkOutDate2: checkOutDate,
        bookingEmail2: bookingEmail,
        mobileNumber2: mobileNumber,
        trip2Adults2: trip2Adults,
        trip2Children2: trip2Children,
        trip2Infants2: trip2Infants,
        trip2Rooms2: trip2Rooms,
        trip2RoomType: roomType,
        cabType2: cabType,
        lunch2: lunch ? "selected" : "Not selected",
        fireCamps2: fireCamps ? "selected" : "Not selected",
        dhimsaDance2: dhimsaDance ? "selected" : "Not selected",
        tentForRent2: tentForRent ? "selected" : "Not selected",
        arakuCuisineExperience2: arakuCuisineExperience ? "selected" : "Not selected",
        katikiWaterfalls2: katikiWaterfalls ? "selected" : "Not selected",
    }

    requesting2DayTrip(trip2BookingDetails);
    
})


