/*Datatypes*/

var name = "babu";

console.log(name);

var a;
var b = 5;

console.log("a = ",a);
console.log("b = ",b)

a = 8;
b = a;
console.log(`new values : a = ${a} , b = ${b} `);

//escaping literal quotes
var myStr = " I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
/**
 * Code Output
 * \'   single quote
 * \""  double quote
 * \\   backslash
 * \n   newline
 * \r   carriage return
 * \t   tab
 * \b   backspace
 * \f   form feed
 */
var mySTr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(mySTr); //variable names are case sensitive

// length of string
console.log("the length of string is ",name.length);

//Bracket notation
console.log("the first letter of the string (using bracket notation) is ",name[0]);

console.log(name[name.length-1]); //to print the last character of string
console.log(name[name.length-2]); //to print the 2nd last character of string

//Word Blanks using function
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = ""; //an empty string
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " to the store.";
    return result; 
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

//shift function
var myArray = [["John", 23], ["dog", 3]];
console.log(myArray);
var removedFromMyArray = myArray.shift(); //removes array elements from the start
console.log("the removed array",removedFromMyArray);
console.log(myArray);

//unshift function - add elements to the beginning of the array
myArray.unshift(["Paul", 35]);
console.log(myArray);

//global vs local scone in function
var fruit = "apple"; //global

function myfood(){
    var fruit = "orange"; //local

    return fruit;
}

console.log("example for local scope function - ", myfood()); //calling the function
console.log("example for global scope - ", fruit) //displays the global scoped variable

//function value returned
function timesFive(num){ //the funciton
    return num * 5; //returning to the function called
}
console.log(timesFive(5)); //calling the function and printing the returned value

//assignment with a returned value
var changed = 0;

function change(num){
    return (num + 5) / 3;
}

changed = change(10) //calling the function and storing the return value in another variable named 'changed'
console.log("changed = ", changed);

var processed = 0;

function processArg(num){
    return (num + 3) / 5;
}

processed = processArg(15) //calling the function

console.log("processed = ", processed);

//stand in line
function nextInLine(arr, item){
    arr.push(item); //adds element to the end of array
    return arr.shift(); //removes the first element in array and returns it
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); //JSON.stringify() Converts a JavaScript object and array into a string
console.log(nextInLine(testArr, 6)); //calling the function
console.log("After" + JSON.stringify(testArr));

//returning boolean value from functions
function isGreater(a,b){
    return a > b; //will return a boolean value
}
console.log(isGreater(15,5)); //calling the function and printing the returned vale

//bracket notation in object
var playerDetails = {
    "name": "sachin",
    "nick name": "master blaster", //property name having space in between
    "playing order": "one",
    "a sponsor": "MRF"
};
var playerName = playerDetails.name; //calling the property value
var playerAlias = playerDetails["nick name"]; //incase of property name being spaced
var playerOrder = playerDetails["playing order"];

console.log(playerName);
console.log(playerAlias);
console.log(playerOrder);

//updating Object Property
console.log(playerDetails); //printing the original object
playerDetails[playerOrder] = "two"; //changing property of object
playerDetails.name = "Sehwag"; //changing property of object
console.log(playerDetails);

//Testing objects for properties
var myObj = {
    gift: "pony",
    pet: "puppy",
    bed: "sleigh"
};

function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){ //checking if the object has a particular property
        return myObj[checkProp];
    } else{
        return "Not Found";
    }

}
console.log(checkObj("gift")); //calling the function for a particular property

//nested objects
var myStorage = {
    "car":{
        "inside":{
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; //object 'myStorage' -> property 'car' -> property 'inside' -> property 'glove box'

console.log(gloveBoxContents);


//Ternary Operator
function checkEqual(a,b){
    return a === b ? true : false;
    // return a === b ?;
}

console.log(checkEqual(1,2));

function checkSign(num){ //multiple ternary operator
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(15));

//mutate an array
const s = [4,8,6]; //a read only variable declared
console.log(s);

Object.freeze(s); //freezing the variable to make it immutable

function editVariable(){
    "use strict";

    //s = [6,4,8]; //variable cannot be assigned new values
    // s[0] = 6; //variable values are changed individually
    // s[1] = 4;
    // s[2] = 8;
    
}

editVariable();
console.log(s);

//rest operator
function sum(a, b){ //normal function
    return a + b;
}
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 3 - no error will be thrown even when we are passing arguments more than the parameters, but only the first two arguments will be evaluated.

function fun(...input) { //function with a rest parameter
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2)); //3
console.log(fun(1, 2, 3)); //6
console.log(fun(1, 2, 3, 4, 5)); //15 - use of the rest parameter, we can gather any number of arguments into an array and do what we want with them. 

//spread operator
    
let arr = ['a', 'b', 'c'];
let arr2 = arr;

arr2.push('d'); // changed the original array

console.log(arr2); 
console.log(arr); //even affected the original array(arr) 

let array = ['a', 'b', 'c'];
let array2 = [...array]; // spread operator for copying 

console.log(array); 
// [ 'a', 'b', 'c' ]

array.push('d'); 
//inserting an element at the end of array2

console.log(array); 
// [ 'a', 'b', 'c', 'd' ]
console.log(array2);
 // [ 'a', 'b', 'c' ]

 //Destructuring assignment
 var voxel = {x: 3.6, y: 7.4, z: 6.54};
//assigning values without destructuring
 var x = voxel.x; // x = 3.6
 var y = voxel.y; // y = 7.4
 var z = voxel.z; //z = 6.54

//  const {x:a,y:b,z:c} = voxel; //destructuring syntax

 var i, j;
[i, j] = [10, 20]; //array destructuring
console.log(i); // 10
console.log(j); // 20

({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40}); //object destructuring
console.log(x); // 10
console.log(y); // 20
console.log(restof); // {m: 30, n: 40}

const AVG_Temperatures = {
    today: 77.5,
    tomorrow: 79
};

function getTempofTomorrow(AvgTemp){ //the object 'AVG_Temperatures' is the parameter here
    "use strict";
    const {tomorrow:tempofTomorrow} = AvgTemp; //the value of keyword 'tomorrow' from the parameter is saved in variable 'tempofTomorrow'
    return tempofTomorrow; //the value extracted is returned
}

console.log(getTempofTomorrow(AVG_Temperatures)); //calling the function 'getTempofTomorrow' and sending a value ie. an object 'AVG_Temperatures'

//Destructuring assignment with Nested Objects
const Local_Forecast ={
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxofTomorrow(forecast){
    "use strict";
    const {tomorrow : {max : maxofTomorrow}} = forecast;
    return maxofTomorrow;
}

console.log(getMaxofTomorrow(Local_Forecast));

//Destructuring assignments for arrays
const [p, q, , r] = [1,2,3,4,5,6]; // elements in array of stored in order
console.log(p,q,r);

//Destructuring using rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list){
    const [ , , ...arr_rest] = list; //keeping blanks to remove first two elements in array
    // const [a, b, ...arr_rest] = list; //another method
    return arr_rest;
}
const arr_rest = removeFirstTwo(source);
console.log("first two removed ",arr_rest);
console.log("source = ",source);