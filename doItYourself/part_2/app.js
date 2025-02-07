/* Arrays */

//arrays are similar to variables
//arrays are used to assign multiple values with respect to each index
//index number starts with 0

var cities = ["Mumbai", "Delhi", "Kolkata", "Chennai"];

// arrays can be assigned have mixed values in different indexes
var mixedArray = [1, "India", 2, "Asia", 29, "Earth"];

//naming of arrays follows the same rules of a variable
//cities[0] = "Mumbai"
//cities[3] = "Chennai"

console.log("3rd element is having index 2, the value is " + cities[2]);


/* Adding and removing elements in Arrays */

//Adding elements
//let us consider array named cities, which has been previously declared.
cities[4] = "Pune";
cities[5] = "Bengaluru";
cities[7] = "Bhubaneswar";
//value at any index can be null too
//notice that the 7th element (index : 6) has been left out

console.log(cities); //display the array in console

//adding elements to the end using push keyword
cities.push("Mysuru");
cities.push("Madurai", "Thiruvananthapuram");

console.log();
console.log("array after pushing new elements to the end: " + cities);

//removing elements
cities.pop();
//deletes the last element.

console.log("array after deleting last element: " + cities);


/* Removing, Inserting, and Extracting elements in Arrays */

//shift method is used to remove elements from the beginning of the elements of the array
cities.shift();
console.log("the elements of the array after using the shift method: " + cities);

//unshift method is used to add one or more elements to the beginning of an array
cities.unshift("Nagpur", "Kharagpur");

console.log("the elements of the array after using the unshift method: " + cities);

//splice method is used to insert one or more elements anywhere in the array
cities.splice(2, 3, "Sambalpur", "Bhopal");
//the first number indicates the from (indexnumber)
//the second number indicates the number of elements to be deleted after insertion.
//here starting with the index number 2 (3rd element in array), new elements would be added, after insertion three elements would be deleted.

console.log("the elements of the array after using the splice method: " + cities);

//slice method is used to copy one or more consecutive elements in any position 
//remember to always put the copied elements into a new array.
var newCities = cities.slice(2, 4);
//the first number indicates the from (indexNumber)
//the second number indicated the end (indexNumber)
//all elements starting from the first number and just before the second number would be copied.

console.log("new array after slice method: " + newCities);


/* for loops */

//for loop is used to run a particular code multiple times 

//create a array of fruits having 5 elements
var fruits = ["apple", "mango", "orange", "pineapple", "banana"];

//fruit to check for
var checkFruit = "pineapple";

//find a particular fruit in the array
for (var i = 0; i < 5; i++) {
    //notice in the conditions of the for loop there are three parts
        //1. the variable used for counting (here starting with 0) and for changing array index
        //the counter variable can be named anything.
        //always declare the variable either globally or locally before using.
        //2. the loop limit. As the array has 5 elements and starting indexing from zero the last index number would be 4
        //you can alternatively write the loop limit as i <= 4.
        //3. increment part - the counter variable is increased by 1 after each iteration
        //please note: always maintain this order
    if (checkFruit === fruits[i]) {
        alert ("found your fruit");
    }
}


/* for loops - Flags, Booleans, Loopus Interruptus, Array Length */

//Flags
// Flag is a variable used to signal the program that a certain condition has been met
// Flag initially has a default value which is either changed (when a condition is met) or remains the same.

let numbers = [12,38,52,25,76];
let checkForOdd = "no"; //flag

//let us check if array has any odd number 
for (var i = 0; i < 5; i++) {
    if (numbers[i] % 2 !== 0) {
        checkForOdd = "yes"; 
    }
}

//now check the flag for a condition
if (checkForOdd === "yes") {
    alert("there is an odd number in the array");
}
else {
    alert("there are only even numbers in the array");
}