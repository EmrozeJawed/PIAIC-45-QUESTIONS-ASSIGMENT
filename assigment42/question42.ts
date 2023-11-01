// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of 
//magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function q42() { 
    let magicians = ["Ahmed", "Bilal", "Hasnain", "Zaid", "Kamran",]
   
   
   
   
    function show_magicians(magicians: string[]) {
        magicians.forEach(function(magician) {
            console.log(magician)
         } )} 


function make_great(magicians: string []) {
    magicians.forEach((magician, index) => {
        magicians[index] = "The Great" +magician 
    }

    )
} 


console.log("orignal list:")
show_magicians(magicians)




make_great(magicians)


console.log("\n Modified List:");
show_magicians(magicians);

}

q42()