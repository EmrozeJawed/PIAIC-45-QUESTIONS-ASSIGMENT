"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const cars = ["Toyota Corolla", "Honda Civic", "Mercades"];
// // Attempt to access an out-of-bounds index
// const fruit = fruits[3]; // This will produce an index error
// console.log("Fruit:", fruit); // This line will never be reached due to the error
const fruits = ["Apple", "Banana", "Orange"];
// Corrected index to access the last element
const fruit = fruits[2]; // Now it accesses the last element
console.log("Fruit:", fruit); // Outputs: Fruit: Orange
