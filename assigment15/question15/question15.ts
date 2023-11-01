// Guest List: If you could invite anyone, living or 
// deceased, to dinner, who would you invite? Make a 
//list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

let guestlist: string[] = ["Hamza", "Ali", "Hasnain", "Ahmed",]
console.log(guestlist)

let canNotAttend: string = "Ali"
console.log(canNotAttend + " " + "cannot make it, for dinner");
let newGuest: string = "Bilal"
guestlist[guestlist.indexOf(canNotAttend)] = newGuest;
guestlist.map((item) => 
console.log(`Dear ${item}, you are invited to dinner tonight We would be honored to have you join us`)
)


