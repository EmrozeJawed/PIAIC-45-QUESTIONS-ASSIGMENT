"use strict";
// Q2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
let personName = "Emroze Emi";
console.log(personName.toLocaleLowerCase()); // Output: emrozr emi
console.log(personName.toLocaleUpperCase()); // Output: EMROZE EMI
console.log(personName.replace(/\b\w/g, (c) => c.toLocaleUpperCase())); // Output: Emroze Emi
