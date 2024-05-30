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