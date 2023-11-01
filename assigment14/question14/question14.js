"use strict";
// const guestlist = [
//     "Hamza",
//     "ALi",
//     "hasnain",
//     "Ahmed"
// ]
// console.log(`Dear ${guestlist[0]} you are invited to dinner tonight We would be honored to have you join us`)
// console.log(`Dear ${guestlist[1]} you are invited to dinner tonight We would be honored to have you join us`)
// console.log(`Dear ${guestlist[2]} you are invited to dinner tonight We would be honored to have you join us`)
// console.log(`Dear ${guestlist[3]} you are invited to dinner tonight We would be honored to have you join us`)
// let absentguest = (`${guestlist[2]}`)
// let replaceguest = (`${guestlist[4]}`)
// if (absentguest === (`${guestlist[2]}`)){
//     console.log (`Dear, ${guestlist[4]} you are invited to dinner tonight We would be honored to have you join us`)
// }
// else {
//     console.log (`The absent guest ${guestlist[2]} was not found in the guest list`)
// }
// Initial guest list
let guestList = [
    "Ada Lovelace",
    "Nelson Mandela"
];
// Print initial invitation messages
console.log("Initial invitation messages:");
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
}
// Update the guest list due to someone not being able to make it
let absentGuest = "Albert Einstein";
let replacementGuest = "Marie Curie";
// Find the absent guest and replace them with the replacement guest
if (guestList.includes(absentGuest)) {
    guestList = guestList.map(guest => (guest === absentGuest ? replacementGuest : guest));
    // Print updated invitation messages
    console.log("\nUpdated invitation messages:");
    for (const guest of guestList) {
        console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
    }
}
else {
    console.log(`The absent guest "${absentGuest}" was not found in the guest list.`);
}
