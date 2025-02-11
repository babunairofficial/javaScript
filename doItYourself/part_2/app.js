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

//Booleans
//Boolean values are = true, false
//instead of using strings "yes" and "no", boolean values true, false can be used.

//consider the numbers array previous used
let checkForEven = false; //flag in which boolean value is used

//this time, check if array has any even number 
for (var i = 0; i < 5; i++) {
    if (numbers[i] % 2 === 0) {
        checkForOdd = true; //boolean value used 
    }
}

//now check the flag for a condition
if (checkForOdd === true) {
    alert("there is an even number in the array");
}
else {
    alert("there are only odd numbers in the array");
}


//Loopus Interruptus
//break keyword is used to exit the loop when a condition is satisfied 
//checking for the same condition in the next elements would not create any difference 

var games = ["cricket", "football", "volleyball", "basketball", "tennis"];
checkGame = "football";
matchFound = false; //flag

for (var i = 0; i < 5; i++) {
    if(checkGame === games[i]) {
        alert("Game found!");
        matchFound = true;
        break; // loopus interruptus - break keyword
    }
}
if (matchFound === false) {
    alert ("Game not on list");
}

//Array Length
//length property is used to find the length of an array without manually counting it.

var citiesNum = cities.length;
//cities array previous declared and has several values

var city = "Hyderabad";
var cityFound = false; //flag
for (var i = 0; i < citiesNum; i++) {
    if (city === cities[i]) {
        cityFound = true;
        alert("Your city is on the list");
        break; //loopus interruptus
    }
}
if (cityFound === false) {
    alert("sorry! city not on list");
}

//note every time for loop is used the variable (i) is declared each time, this is because the variable is declared locally each time.
//outside the loop the variable and its value does not exist.


/* for loops nested */

// loop within another loop 

var firstName = ["Rahul", "Prashant", "Kajal", "Nitin", "Suyash"];
var lastName = ["Gupta", "Shinde", "Rathore", "Singhania", "Jha"];
var fullName = [];

for (var i = 0; i < firstName.length; i++) { //outer loop
    for (var j = 0; j < lastName.length; j++) { //inner loop
        fullName.push(firstName[i] + " " + lastName[j]);
    }
}
//for each iteration of outer loop, the inner loop will be executed one complete time.
console.log("full names are " + fullName); //display the new added elements in the array


/* Changing Case */

//changing the string to lowercase or UPPERCASE

// toLowerCase() method is used to change the string to lowercase
var cityToCheck = prompt("Enter your city");

var cityToCheck1 = cityToCheck.toLowerCase();
console.log(cityToCheck + " city in all lowercase " + cityToCheck1);

//toUpperCase() method is used to change the string to UPPERCASE.
console.log(cityToCheck + " city in all uppercase " + cityToCheck.toUpperCase());


/* Measuring Lengths and Extracting parts of String */

//Extracting parts

//A string is indexed like an array
//each character of a string behaves similar to the elements of an array
// Slice method is used to extract parts of a string

var city = prompt("enter a city");

//store the value of the first character in a variable
var firstChar = city.slice(0, 1);
//the first number within the parenthesis represents the index number of the first character
//the second number within the parenthesis represents the index number just after the end of slice;

var otherChars = city.slice(1);
//the second number within the parenthesis when omitted means the slice it to be done till the end of the characters of the string.

//changing case
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();

console.log(firstChar + otherChars);

//Measuring lengths
// .length property is used to get the length of a string.

var month = prompt("Enter a month");
var charsInMonth = month.length;
console.log("the number of characters in " + month + " is " + charsInMonth);

// .length property can be used for lengthy strings, whenever there is need to iterate a loop

if (charsInMonth > 4) {
    var monthAbbrev = month.slice(0, 4);
    console.log("shorter version of " + month + " is " + monthAbbrev)
}
//notice here whenever month length is more than 4, slice is used to give the shorter version.

//this can be used whenever there is need to check of double spaces in a string.
var str = prompt("Enter a string");
var numOfChars = str.length;
for (var i = 0; i < numOfChars; i++) {
    //check for spaces at 2 adjacent places simultaneously
    if (str.slice(i, i+2) === "  ") { 
        alert("Double Spaces!");
    }
}


/* Finding Segments of strings */

var passage = "There are good people who are dealt a bad hand by fate, and bad people who live long, comfortable, privileged lives. A small twist of fate can save or end a life; random chance is a permanent, powerful player in each of our lives, and in human history as well.";
console.log(passage);
// let us find strings "good people", from the above

//one method is to run a loop to check for the group of characters for all iterations of the length of the string

for (var i = 0; i < passage.length; i++) {
    if (passage.slice(i, i+11) === "good people") {
        passage = passage.slice(0, i) + "nice human beings" + passage.slice(i+11);
    }
}

//display the final passage
console.log(passage);

//another method is to check for the index of the first occurence of the string in the text.
var text = "Think about one of the most powerful influences on a young child's life - the absence of a father figure. Look back on recent presidents, and you'll find an absent, or weak, or failed father in the lives of Lyndon Johnson, Richard Nixon, Ronald Reagan, Bill Clinton and Barack Obama.";
console.log(text);

//find the starting index of the string
var firstOccurence = text.indexOf("most powerful");
//if string found then the starting index number is saved in the variable, 
// or else -1 is assigned to the variable

console.log(firstOccurence); //display the value assigned to the variable

if (firstOccurence !== -1) {
    text = text.slice(0, firstOccurence) + "strongest" + text.slice(firstOccurence + 13);
}
//the only limitation of this method is that it only checks for the first occurence and ignores any other occurences

console.log(text);

// lastIndexOf is used to find the last instance of a segment
var saying = "To be or not to be";
console.log(saying);

var lastOccurence = saying.lastIndexOf("be");
console.log(lastOccurence);
//try changing the last occurence string
if (lastOccurence !== -1) {
    saying = saying.slice(0, lastOccurence) + "BE" + saying.slice(lastOccurence + 2);
}
console.log(saying); //display the final string


/* Finding a character of a string at a location */

//.charAt(indexNumber) is used to find the character at a particular index number of a string
firstName = "Sachin"; //variable already declared

var firstLetter = firstName.charAt(0);
var secondLetter = firstName.charAt(1);

console.log(firstLetter);
console.log(secondLetter);


/* Replacing characters in a string */

// replace() method searches a string for a value and replaces it with another value.
var texts = "Visit Us Again!";
console.log(texts);

var result = texts.replace("Again", "Next Time");
//first value within the parenthesis is the Search Value (Required)
//second value within the parenthesis is the new Value (Required)
console.log(result);
//there is a limitation to this method, it only searches for the first instance.

// global replace is used to replace all instances
var tongueTwister = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick!";
console.log(tongueTwister);

// in global replace, the search value is enclosed within slashes instead of quotation marks
//followed by g
//the new value to be inserted is enclosed by quotation marks 
var result2 = tongueTwister.replace(/Peter Piper/g, "Mr. Pan");
console.log(result2);


/* Rounding Numbers */

//Math.round() method rounds a number to the nearest integer

var x = 2.49;
var y = -2.49;

var roundX = Math.round(x);
console.log(roundX);

var roundY = Math.round(y);
console.log(roundY);

//Math.ceil method is used to round up small fractions to nearest integer
var a = 0.000001;
var ceilingA = Math.ceil(a);
// 0.000001 would be rounded up to 1. 
console.log(ceilingA);

//Math.floor() method is used to round down to nearest integer
var z = 0.99999;
var floorZ = Math.floor(z);
//0.99999 would be rounded down to 0.
console.log(floorZ);


/* Random numbers */

//Math.random gives a random number (a decimal) between 0 (inclusive) and 1 (exclusive).
var randomNum = Math.random();
console.log(randomNum);

//to get a random number between 0 and 6, multiply the randomNum variable with 6
var impNum = randomNum * 6;
console.log(impNum);

//to get a random number starting with 1.
var numStart = impNum + 1;
console.log(numStart);

//to get a random integer from 1 to 6
var intNum = Math.floor(numStart);
console.log(intNum);

//find a random number between 1 and 10
var ranNum = Math.floor(Math.random() * 10 + 1);
console.log("Random number between 1 and 10 is " + ranNum);

//find a random number between 0 and 10
var randomNumber = Math.floor(Math.random() * 10);
console.log("Random number between 0 and 10 is " + randomNumber);


/* Converting strings to integers and decimals */

// Except + operator, all other operators like *, /, -, % have a the property to change a string to a number temporarily to perform mathematical operations

var currentAge = prompt("enter your age"); //a string is stored in the variable
var newAge = currentAge - 2; //subtraction operator is performed on a string and a number
console.log(newAge);
console.log(typeof(newAge)); //displays the data type of the variable - here a number

//even when mathematical operation is perfomed on two strings having numeric values the resultant becomes number (except for + operator)
var profit = "500" * "300"; //multiplication of two strings having numeric value
console.log(profit);
console.log(typeof(profit)); //number

//numeric string and a number 
profit = "400" / 5; //mathematical operation performed here too
console.log(profit);
console.log(typeof(profit)); //number

//numeric string and a string - not a number operation
profit = "400" - "duck"; 
console.log(profit);
console.log(typeof(profit)); //NaN

//But for addition operator, a numeric string and a number concatenate
result = "200" + 150;
console.log(result);
console.log(typeof(result));

// parseInt is used to solve this problem of concatenation using numberic string and a number
// parseInt is used to covert an integer value string to an integer
result = parseInt("200") + 150;
console.log("result after using parseInt : " + result);
console.log(typeof(result));
//similarly, parseFloat can be used to convert a decimal value string to decimal number.
var myFraction = parseFloat("1.9999999999999");
console.log("On using parseFloat : " + myFraction);
console.log(typeof(myFraction));


/* Converting strings to numbers,
    numbers to strings */

// as learned previously, parseInt and parseFloat can be used to convert a string representing a number to an integer and a floating point number respectively
// Number() method converts a value to a number.

var integerString = "27";
var integerNum = Number(integerString);
console.log(integerNum);
console.log(typeof(integerNum));

var floatingString = "27.745345674537";
var floatingNum = Number(floatingString);
console.log(floatingNum);
console.log(typeof(floatingNum));

// toString() method can convert a number to a string
var numberAsNumber = "98";
var numberAsString = numberAsNumber.toString();
console.log(numberAsString);
console.log(typeof(numberAsString));