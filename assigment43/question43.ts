// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one
// array with the Great added to each magician’s name.

function q43() { 
    let magicians = ["Ahmed", "Bilal", "Hasnain", "Zaid", "Kamran",]
   
   
   
   
    function show_magicians(magicians: string[]) {
        magicians.forEach(function(magician) {
            console.log(magician)
         } )} 



         function make_great(magicians: string[]): string[] {
            let great_magicians: string[] = [];
            magicians.forEach(function(magician){
              great_magicians.push(magician + ' the Great');
            })
            return great_magicians;
          }

let great_magicians: string[] = make_great(magicians.slice())
   


console.log("Orignal magicians:")
show_magicians(magicians)  
 console.log("\n Great magicians")
 show_magicians(great_magicians)
} 
   
q43()