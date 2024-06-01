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

var myArray = [["John", 23], ["dog", 3]];
console.log(myArray);
var removedFromMyArray = myArray.shift(); //removes array elements from the start
console.log("the removed array",removedFromMyArray);
console.log(myArray);

