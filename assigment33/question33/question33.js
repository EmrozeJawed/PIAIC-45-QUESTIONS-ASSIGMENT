"use strict";
function q33() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.forEach((numbers) => {
        let ordinal = "";
        if (numbers === 1) {
            ordinal = "st";
        }
        else if (numbers === 2) {
            ordinal = "nd";
        }
        else if (numbers === 3) {
            ordinal = "rd";
        }
        else {
            ordinal = "th";
        }
        console.log(`${numbers} ${ordinal}`);
    });
}
q33();
