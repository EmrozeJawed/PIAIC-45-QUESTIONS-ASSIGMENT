"use strict";
function q32() {
    let current_usernames = ["KABIR", "Ahmed", "kamran", ""];
    let new_users = ["Kabir", "Ahmed", "Hasnain", "Ahsan"];
    for (let i = 0; i < new_users.length; i++) {
        let isunique = true;
        for (let j = 0; j < current_usernames.length; j++) {
            if (new_users[i].toLocaleLowerCase() === current_usernames[j].toLocaleLowerCase())
                isunique = false;
            break;
        }
        if (isunique) {
            console.log("".concat(new_users[i], " is available"));
        }
        else {
            console.log("".concat(new_users[i], " is not available, please enter a new username"));
        }
    }
}
q32();
