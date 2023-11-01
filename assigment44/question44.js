"use strict";
function q44() {
    function makeSandwich(...ingredients) {
        console.log("Making a sandwich with the following ingredients:");
        ingredients.forEach(function (ingredient) {
            console.log("- " + ingredient);
        });
        console.log("Enjoy your sandwich!\n");
    }
    makeSandwich("bread", "cheese", "ham");
    makeSandwich("bread", "peanut butter", "jelly");
    makeSandwich("bread", "turkey", "lettuce", "tomato", "mayo");
}
q44();
