// Conditional Tests: Write a series of conditional
// tests. Print a statement describing each test and your prediction
// for the results of each test. Your code should look something like this:



function q23() {

    let number = 7;
    console.log("is the number equad to 7? I predict true.");
    console.log(number === 7);
    console.log("is the number less than 5? I predict false,");
    console.log(number < 5);
    let greet1 = `hello`;
    let greet2 = `hello`;
    console.log("are the greets equal? I predict true.");
    console.log(greet1 === greet2);
    let array = [1,2,3];
    console.log("is the length of the aray greater than 2? i Predict true")
    console.log(array.length > 2);
    let boolean = false;
    console.log("is the boolean value false? I predict false.");
    console.log(boolean === false)
    let object1 = {name: "Emroze", Age: 17};
    let object2 = {name: "Emroze", Age: 17};
    console.log("are the objects equal? I predict false.")
    console.log(object1 === object2)
    let nullValue = null;
    console.log("is the null value equal to undefined? I predict false.")
    console.log(nullValue === undefined);
    let number2 = 10;
    console.log("is the number greater than 5 and less than 15? I predict true.")
    console.log(number2 > 5 && number2 < 15);
    let greet3 = `hello`;
   console.log("does the greet contain the letter 'o' I predict true ")
   console.log(greet3.includes('o'))
   let array2 = [4, 5, 6,]
   console.log("is the number 7 in the array? I predict false,")
   console.log(array2.includes(7))
} 

q23()