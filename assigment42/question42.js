"use strict";
function q42() {
    let magicians = ["Ahmed", "Bilal", "Hasnain", "Zaid", "Kamran",];
    function show_magicians(magicians) {
        magicians.forEach(function (magician) {
            console.log(magician);
        });
    }
    function make_great(magicians) {
        magicians.forEach((magician, index) => {
            magicians[index] = "The Great" + magician;
        });
    }
    console.log("orignal list:");
    show_magicians(magicians);
    make_great(magicians);
    console.log("\n Modified List:");
    show_magicians(magicians);
}
q42();
