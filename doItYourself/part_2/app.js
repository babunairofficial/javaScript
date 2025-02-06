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