// adult count

let trip4AddAdult = document.querySelector('#trip4AddAdult');
let trip4SubAdult = document.querySelector('#trip4SubAdult');

let trip4Count1 = 0;

let trip4AdultCount = document.querySelector('#trip4AdultCount');

trip4AddAdult.addEventListener('click', () => {
    trip4AdultCount.innerHTML = ++trip4Count1;
});

trip4SubAdult.addEventListener('click', () => {
    if (trip4AdultCount.innerHTML == 0)
        return;
    trip4AdultCount.innerHTML = --trip4Count1;
});

// children count

let trip4AddChildren = document.querySelector('#trip4AddChildren');
let trip4SubChildren = document.querySelector('#trip4SubChildren');

let trip4Count2 = 0;

let trip4ChildrenCount = document.querySelector('#trip4ChildrenCount');

trip4AddChildren.addEventListener('click', () => {
    trip4ChildrenCount.innerHTML = ++trip4Count2;
});

trip4SubChildren.addEventListener('click', () => {
    if (trip4ChildrenCount.innerHTML == 0)
        return;
    trip4ChildrenCount.innerHTML = --trip4Count2;
});

// infants count

let trip4AddInfants = document.querySelector('#trip4AddInfants');
let trip4SubInfants = document.querySelector('#trip4SubInfants');

let trip4Count3 = 0;

let trip4InfantsCount = document.querySelector('#trip4InfantsCount');

trip4AddInfants.addEventListener('click', () => {
    trip4InfantsCount.innerHTML = ++trip4Count3;
});

trip4SubInfants.addEventListener('click', () => {
    if (trip4InfantsCount.innerHTML == 0)
        return;
    trip4InfantsCount.innerHTML = --trip4Count3;
});


// rooms count

let trip4addRooms = document.querySelector('#trip4addRooms');
let trip4SubRooms = document.querySelector('#trip4SubRooms');

count4 = 0;

let trip4RoomsCount = document.querySelector('#trip4RoomsCount');

trip4addRooms.addEventListener('click', () => {
    trip4RoomsCount.innerHTML = ++count4;
});

trip4SubRooms.addEventListener('click', () => {
    if (trip4RoomsCount.innerHTML == 0)
        return;
    trip4RoomsCount.innerHTML = --count4;
});

// getting info

let trip4Form = document.querySelector('.travellerInformationOfTrip4');

let trip4Date = new Date();
let validMobileNumberExpression = "^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[6789]\\d{9}$";

// check in date
trip4Form['check-in'].valueAsDate = new Date();
// check out date
trip4Form['check-out'].valueAsDate = new Date(trip4Date.setDate(trip4Date.getDate() + 2));

trip4Form.addEventListener('submit', (e) => {

    if (auth.currentUser == null) {
        displayMessageBoxFunction('Sign up or Log in to continue')
        signUpFunction();
    }
    
    e.preventDefault();

    // check-in info
    let checkInDate = trip4Form['check-in'].value;
    // check-out info
    let checkOutDate = trip4Form['check-out'].value;
    // booking mail address
    let bookingEmail = trip4Form['booking-email'].value;
    // mobile number for contact
    let mobileNumber = trip4Form['mobile-number'].value;
    // adults count
    let trip4Adults = trip4AdultCount.innerHTML;
    // children count
    let trip4Children = trip4ChildrenCount.innerHTML;
    // infants count
    let trip4Infants = trip4InfantsCount.innerHTML;
    // rooms count
    let trip4Rooms = trip4RoomsCount.innerHTML;
    // cab type
    let cabType = trip4Form['cab-type'].value;
    // room type
    let AC = (trip4Form['acRoom'].checked) ? true : false;
    let nonAC = (trip4Form['non-acRoom'].checked) ? true : false;
    let roomType;
    // add ons info
    let fireCamps = (trip4Form['switch1'].checked) ? true : false;
    let dhimsaDance = (trip4Form['switch2'].checked) ? true : false;
    let tentForRent = (trip4Form['switch3'].checked) ? true : false;
    let arakuCuisineExperience = (trip4Form['switch4'].checked) ? true : false;
    let lunch = (trip4Form['switch5'].checked) ? true : false;
    let katikiWaterfalls = (trip4Form['switch6'].checked) ? true : false;
    let rentARide = (trip4Form['switch7'].checked) ? true : false;
    let trecking = (trip4Form['switch8'].checked) ? true : false;
    // error text box
    let trip4Error = '';
    let errorflag = false;

    // validation

    if (checkInDate > checkOutDate) {
        errorflag = true;
        trip4Error += '<li style="background-color:transparent">check-out date is too earlier than check-in</li>';
    }
    if (!mobileNumber.match(validMobileNumberExpression)) {
        errorflag = true;
        trip4Error += '<li style="background-color:transparent">Invalid mobile number</li>';
    }
    if (trip4Adults == 0 && trip4Children == 0 && trip4Infants == 0) {
        errorflag = true;
        trip4Error += '<li style="background-color:transparent">Add Guests</li>';
    }
    if (trip4Adults == 0) {
        errorflag = true;
        trip4Error += '<li style="background-color:transparent">Add minimum 1 adult</li>';
    }
    if (trip4Rooms == 0) {
        errorflag = true;
        trip4Error += '<li style="background-color:transparent">Rooms count not provided</li>';
    }
    if (AC == false && nonAC == false) {
        errorflag = true;
        trip4Error += '<li style="background-color:transparent">Select Room type</li>';
    } else {
        roomType = (trip4Form['acRoom'].checked) ? "AC" : "Non-AC";
    }

    // error display function
    if (errorflag) {
        displayMessageBoxFunction(trip4Error);
        return;
    }

    let trip4BookingDetails = {
        checkInDate4: checkInDate,
        checkOutDate4: checkOutDate,
        bookingEmail4: bookingEmail,
        mobileNumber4: mobileNumber,
        trip4Adults4: trip4Adults,
        trip4Children4: trip4Children,
        trip4Infants4: trip4Infants,
        trip4Rooms4: trip4Rooms,
        trip4RoomType: roomType,
        cabType4: cabType,
        lunch4: lunch ? "selected" : "Not selected",
        fireCamps4: fireCamps ? "selected" : "Not selected",
        dhimsaDance4: dhimsaDance ? "selected" : "Not selected",
        tentForRent4: tentForRent ? "selected" : "Not selected",
        arakuCuisineExperience4: arakuCuisineExperience ? "selected" : "Not selected",
        katikiWaterfalls4: katikiWaterfalls ? "selected" : "Not selected",
        rentARide4: rentARide ?  "selected" : "Not selected",
        trecking4: trecking ?  "selected" : "Not selected",
    }

    requesting4DayTrip(trip4BookingDetails);
})


