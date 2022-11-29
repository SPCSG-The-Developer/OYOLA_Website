// adult count

let trip1AddAdult = document.querySelector('#trip1AddAdult');
let trip1SubAdult = document.querySelector('#trip1SubAdult');

let trip1Count1 = 0;

let trip1AdultCount = document.querySelector('#trip1AdultCount');

trip1AddAdult.addEventListener('click', () => {
    trip1AdultCount.innerHTML = ++trip1Count1;
});

trip1SubAdult.addEventListener('click', () => {
    if (trip1AdultCount.innerHTML == 0)
        return;
    trip1AdultCount.innerHTML = --trip1Count1;
});

// children count

let trip1AddChildren = document.querySelector('#trip1AddChildren');
let trip1SubChildren = document.querySelector('#trip1SubChildren');

let trip1Count2 = 0;

let trip1ChildrenCount = document.querySelector('#trip1ChildrenCount');

trip1AddChildren.addEventListener('click', () => {
    trip1ChildrenCount.innerHTML = ++trip1Count2;
});

trip1SubChildren.addEventListener('click', () => {
    if (trip1ChildrenCount.innerHTML == 0)
        return;
    trip1ChildrenCount.innerHTML = --trip1Count2;
});

// infants count

let trip1AddInfants = document.querySelector('#trip1AddInfants');
let trip1SubInfants = document.querySelector('#trip1SubInfants');

let trip1Count3 = 0;

let trip1InfantsCount = document.querySelector('#trip1InfantsCount');

trip1AddInfants.addEventListener('click', () => {
    trip1InfantsCount.innerHTML = ++trip1Count3;
});

trip1SubInfants.addEventListener('click', () => {
    if (trip1InfantsCount.innerHTML == 0)
        return;
    trip1InfantsCount.innerHTML = --trip1Count3;
});

// getting user info

let trip1Form = document.querySelector('.travellerInformationOfTrip1');

let validMobileNumberExpression = "^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[6789]\\d{9}$";

// check in date
trip1Form['check-in'].valueAsDate = new Date();
// check out date
trip1Form['check-out'].valueAsDate = new Date();

trip1Form.addEventListener('submit', (e) => {

    if (auth.currentUser == null) {
        displayMessageBoxFunction('Sign up or Log in to continue')
        signUpFunction();
    }

    
    e.preventDefault();

    // check-in date
    let checkInDate = trip1Form['check-in'].value;
    // check-out date
    let checkOutDate = trip1Form['check-out'].value;
    // booking email address
    let bookingEmail = trip1Form['booking-email'].value;
    // mobile number for contact
    let mobileNumber = trip1Form['mobile-number'].value;
    // adults count
    let trip1Adults = trip1AdultCount.innerHTML;
    // children count
    let trip1Children = trip1ChildrenCount.innerHTML;
    // infants count
    let trip1Infants = trip1InfantsCount.innerHTML;
    // cab type
    let cabType = trip1Form['cab-type'].value;
    // add ons 
    let breakFast = (trip1Form['switch1'].checked) ? true : false;
    let lunch = (trip1Form['switch2'].checked) ? true : false;
    // error text box
    let trip1Error = '';
    let errorflag = false;

    // validation

    if (checkInDate > checkOutDate) {
        errorflag = true;
        trip1Error += '<li style="background-color:transparent">check-in date must be lesser than check-out date</li>';
    }
    if (!mobileNumber.match(validMobileNumberExpression)) {
        errorflag = true;
        trip1Error += '<li style="background-color:transparent">Invalid mobile number</li>';
    }
    if (trip1Adults == 0 && trip1Children == 0 && trip1Infants == 0) {
        errorflag = true;
        trip1Error += '<li style="background-color:transparent">Add Guests</li>';
    }
    if (trip1Adults == 0) {
        errorflag = true;
        trip1Error += '<li style="background-color:transparent">Add minimum 1 adult</li>';
    }
    if (errorflag) {
        displayMessageBoxFunction(trip1Error);
        return
    }

    let trip1BookingDetails = {
        checkInDate1: checkInDate,
        checkOutDate1: checkOutDate,
        bookingEmail1: bookingEmail,
        mobileNumber1: mobileNumber,
        trip1Adults1: trip1Adults,
        trip1Children1: trip1Children,
        trip1Infants1: trip1Infants,
        cabType1: cabType,
        breakFast1: breakFast ? "selected" : "Not selected",
        lunch1: lunch ? "selected" : "Not selected",
    }

    requesting1DayTrip(trip1BookingDetails);
});



