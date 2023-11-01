"use strict";
function q43() {
    let magicians = ["Ahmed", "Bilal", "Hasnain", "Zaid", "Kamran",];
    function show_magicians(magicians) {
        magicians.forEach(function (magician) {
            console.log(magician);
        });
    }
    function make_great(magicians) {
        let great_magicians = [];
        magicians.forEach(function (magician) {
            great_magicians.push(magician + ' the Great');
        });
        return great_magicians;
    }
    let great_magicians = make_great(magicians.slice());
    console.log("Orignal magicians:");
    show_magicians(magicians);
    console.log("\n Great magicians");
    show_magicians(great_magicians);
}
q43();
