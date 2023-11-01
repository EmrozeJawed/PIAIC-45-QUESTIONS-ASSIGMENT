// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.


let guestList: string[] = ["ALi", 'Ahmed', "Hamza","Hasnain",];
let cannotAttend: string = "Hasnain";
let newGuest: string = "Bilal";
guestList[guestList.indexOf(cannotAttend)] = newGuest;
let guestBegin: string = "Usaim"
guestList.unshift(guestBegin);
let middleGuest: string = "kabir"
let middleIndex = guestList.length / 2.
guestList.splice(middleIndex, 0, middleGuest)
guestList.push("Shoaib")


console.log(guestList.length + " " + "peoples" + " " +  "are invited to dinner")