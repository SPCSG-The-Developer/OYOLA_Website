// adding data to database when user creates their account

function addAccountBasicInfo(uid, userName, userEmail) {
    db.collection("users").doc(uid).set({
        name: userName,
        email: userEmail,
        trip1BookingsCount: 0,
        trip2BookingsCount: 0,
        trip3BookingsCount: 0,
        trip4BookingsCount: 0,
    })
}

// getting user info 

let accountDetailsForm = document.querySelector('.account-details-form');

function setUpUserInfo(uid, userEmail) {
    db.collection("users").doc(uid).get().then((doc) => {
        accountDetailsForm['name'].value = doc.data().name;
        accountDetailsForm['email'].value = userEmail;
    });
}

// updating user info 

function updateName(updateduserName) {
    const userRef = db.collection("users").doc(auth.currentUser.uid);
    userRef.update({
        name: updateduserName,
    }).then(() => {
        displayMessageBoxFunction("Your name has been updated successfully");
    });
}


// sending trip1 booking details 
function requesting1DayTrip(details) {

    details.tripPackageName = "1dayTrip";
    let currentTime = new Date;
    db.collection("users").doc(auth.currentUser.uid).get().then((doc) => {
        details.name = doc.data().name;
        
        let count = doc.data().trip1BookingsCount;
        count++;
        let trip = "trip1_"+ count.toString();
        let tripId = trip+auth.currentUser.uid;

        db.collection("users").doc(auth.currentUser.uid).update({
            trip1BookingsCount: count,
        })

        // sending user booking info

        db.collection("1dayTripBookings").doc(tripId).set({
            name: details.name,
            email: details.bookingEmail1,
            phone_number: details.mobileNumber1,
            package: details.tripPackageName,
            checkIn: details.checkInDate1,
            checkOut: details.checkOutDate1,
            adults: details.trip1Adults1,
            children: details.trip1Children1,
            infants: details.trip1Infants1,
            cab_type: details.cabType1,
            breakfast: details.breakFast1,
            lunch: details.lunch1,
            status: "pending",
            timeStamp: currentTime,
        });

        statusDisplayModalFunction("Thanks for contacting OYOLA","Your request has been sent successfully.We will contact you soon")
        
    }).catch((e)=>{
        statusDisplayModalFunction("Oops something went problem!","<li>Check your interet connection</li><li>or try again later</li>")
    });
}

// sending trip2 booking details 
function requesting2DayTrip(details) {

    details.tripPackageName = "2dayTrip";
    let currentTime = new Date;
    db.collection("users").doc(auth.currentUser.uid).get().then((doc) => {
        details.name = doc.data().name;

        let count = doc.data().trip2BookingsCount;
        count++;
        let trip = "trip2_"+ count.toString();
        let tripId = trip+auth.currentUser.uid;

        db.collection("users").doc(auth.currentUser.uid).update({
            trip2BookingsCount: count,
        })

        // sending user booking info

        db.collection("2dayTripBookings").doc(tripId).set({
            name: details.name,
            email: details.bookingEmail2,
            phone_number: details.mobileNumber2,
            package: details.tripPackageName,
            checkIn: details.checkInDate2,
            checkOut: details.checkOutDate2,
            adults: details.trip2Adults2,
            children: details.trip2Children2,
            infants: details.trip2Infants2,
            rooms: details.trip2Rooms2,
            room_type: details.trip2RoomType,            
            cab_type: details.cabType2,
            lunch: details.lunch2,
            firecamp: details.fireCamps2,
            dhims_Dance: details.dhimsaDance2,
            tent_For_Rent: details.tentForRent2,
            araku_Cusine_Expeirience: details.arakuCuisineExperience2,
            katiki_Waterfalls: details.katikiWaterfalls2,
            status: "pending",
            timeStamp: currentTime,
        });

        statusDisplayModalFunction("Thanks for contacting OYOLA","Your request has been sent successfully.We will contact you soon")
        
    }).catch((e)=>{
        statusDisplayModalFunction("Oops something went problem!","<li>Check your interet connection</li><li>or try again later</li>")
    });
}


// sending trip3 booking details 
function requesting3DayTrip(details) {

    details.tripPackageName = "3dayTrip";
    let currentTime = new Date;
    db.collection("users").doc(auth.currentUser.uid).get().then((doc) => {
        details.name = doc.data().name;

        let count = doc.data().trip3BookingsCount;
        count++;
        let trip = "trip3_"+ count.toString();
        let tripId = trip+auth.currentUser.uid;

        db.collection("users").doc(auth.currentUser.uid).update({
            trip3BookingsCount: count,
        })

        // sending user booking info

        db.collection("3dayTripBookings").doc(tripId).set({
            name: details.name,
            email: details.bookingEmail3,
            phone_number: details.mobileNumber3,
            package: details.tripPackageName,
            checkIn: details.checkInDate3,
            checkOut: details.checkOutDate3,
            adults: details.trip3Adults3,
            children: details.trip3Children3,
            infants: details.trip3Infants3,
            rooms: details.trip3Rooms3,
            room_type: details.trip3RoomType,            
            cab_type: details.cabType3,
            lunch: details.lunch3,
            firecamp: details.fireCamps3,
            dhims_Dance: details.dhimsaDance3,
            tent_For_Rent: details.tentForRent3,
            araku_Cusine_Expeirience: details.arakuCuisineExperience3,
            katiki_Waterfalls: details.katikiWaterfalls3,
            rent_A_Ride: details.rentARide3,
            status: "pending",
            timeStamp: currentTime,
        });

        statusDisplayModalFunction("Thanks for contacting OYOLA","Your request has been sent successfully.We will contact you soon")
        
    }).catch((e)=>{
        statusDisplayModalFunction("Oops something went problem!","<li>Check your interet connection</li><li>or try again later</li>")
    });
}


// sending trip4 booking details 
function requesting4DayTrip(details) {

    details.tripPackageName = "4dayTrip";
    let currentTime = new Date;
    db.collection("users").doc(auth.currentUser.uid).get().then((doc) => {
        details.name = doc.data().name;

        let count = doc.data().trip4BookingsCount;
        count++;
        let trip = "trip4_"+ count.toString();
        let tripId = trip+auth.currentUser.uid;

        db.collection("users").doc(auth.currentUser.uid).update({
            trip4BookingsCount: count,
        })


        // sending user booking info

        db.collection("4dayTripBookings").doc(tripId).set({
            name: details.name,
            email: details.bookingEmail4,
            phone_number: details.mobileNumber4,
            package: details.tripPackageName,
            checkIn: details.checkInDate4,
            checkOut: details.checkOutDate4,
            adults: details.trip4Adults4,
            children: details.trip4Children4,
            infants: details.trip4Infants4,
            rooms: details.trip4Rooms4,
            room_type: details.trip4RoomType,            
            cab_type: details.cabType4,
            lunch: details.lunch4,
            firecamp: details.fireCamps4,
            dhims_Dance: details.dhimsaDance4,
            tent_For_Rent: details.tentForRent4,
            araku_Cusine_Expeirience: details.arakuCuisineExperience4,
            katiki_Waterfalls: details.katikiWaterfalls4,
            rent_A_Ride: details.rentARide4,
            trecking: details.trecking4,
            status: "pending",
            timeStamp: currentTime,
        });

        statusDisplayModalFunction("Thanks for contacting OYOLA","Your request has been sent successfully.We will contact you soon")
        
    }).catch((e)=>{
        statusDisplayModalFunction("Oops something went problem!","<li>Check your interet connection</li><li>or try again later</li>")
    });
}