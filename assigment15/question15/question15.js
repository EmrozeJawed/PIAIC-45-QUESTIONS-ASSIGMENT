"use strict";
let guestlist = ["Hamza", "Ali", "Hasnain", "Ahmed",];
console.log(guestlist);
let canNotAttend = "Ali";
console.log(canNotAttend + " " + "cannot make it, for dinner");
let newGuest = "Bilal";
guestlist[guestlist.indexOf(canNotAttend)] = newGuest;
guestlist.map((item) => console.log(`Dear ${item}, you are invited to dinner tonight We would be honored to have you join us`));
