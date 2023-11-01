"use strict";
function q31() {
    let usernames = []; //empty array
    if (usernames.length === 0) {
        console.log("we need to find some users");
    }
    else {
        usernames.forEach(function (username) {
            if (username === 'admin') {
                console.log("Hello admin, would you like to see a status report?");
            }
            else {
                console.log("Hello ".concat(username, ", thank you for logging in again."));
            }
        });
    }
}
q31();
