// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
function q32() {
     let current_usernames = ["KABIR", "Ahmed", "kamran", ""]
    let new_users = ["Kabir", "Ahmed", "Hasnain", "Ahsan"]
 
    for (let i = 0; i < new_users.length; i++){
        let isunique = true;
    
    for(let j = 0; j < current_usernames.length; j++) {
        if(new_users [i].toLocaleLowerCase() === current_usernames[j].toLocaleLowerCase())
        isunique = false;
         break;

  } 
         if (isunique) {
            console.log("".concat(new_users[i], " is available"))
        }
        else {
            console.log("".concat(new_users[i], " is not available, please enter a new username"));
         }
   
} }
q32()