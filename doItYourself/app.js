/*alerts*/

alert("Welcome to Javascript"); 
//alert is a keyword. 
// within parenthesis we have a text string in double quotes (or even single quotes will do)
//each line ends with a semicolon, except when curly brackets are used

window.alert("alert using longer version");
//alternatively window.alert can be used instead of the shorter version.

/*variables*/
var msg = "Hello"; //variable declared using keyword var. 

msg = "have a nice day"; //variable value reassigned
//while re-assigning values there is no need to declare the same variable again. 

alert(msg);
//alert keyword will display the value of the variable msg


/*variable for numbers*/

//variables can never start with a number, eg. 'var 1stNumber' is invalid name of variable.
//variable name can have a number on any position except the first position. eg. 'var number1st' is valid.
//variables can be assigned to numbers
var i = 5;

//variable assigned to a number can perform mathematical operation with a number 
i = i + 1; //value of i would be 6
// the resultant value of variable is a number

//variable assigned to a number can perform mathematical operation with itself or any other variable assigned to a number
i = i + i; //value of i would be 12
//the resultant value of variable is a number

var a = "1234";
//this variable is assigned to a number within quotes, it will be treated as a string variable

//alert can display numbers, but the number will be treated as a string
alert(144);

//alert can display a variable assigned to a number, but the value of the variable will be treated as a string.
alert(i); //alert would display 12, as a string


/*Variable Names Legal and Illegal*/

//variable names cant be enclosed in quotes
/* the following is a wrong usage:
var "name"; 
*/

//variable names can never start with a number
/* the following is a wrong usage:
var 1stperson;
*/

//variable names cannot be a number
/* the following is a wrong usage:
var 1234;
*/
//variable names cannot have a space in between charaters
/* the following is a wrong usage:
var first name;
*/

//variable names can only contain letter, numbers, $, _
var first_name = "aman";
var second$name = "kumar";
var rank1mark = 512;
var $1total;
var $total2;
//console.log used to display the output in the terminal or in the console of the browser
console.log(first_name);
console.log(second$name);
console.log(rank1mark);

//variable names are case case-sensitive
var fruit = "apple";
var Fruit = "mango";
console.log(fruit);
console.log(Fruit);

//prefer using camelCase convention for better readability
var firstNameOfPerson = "Babu";
console.log(firstNameOfPerson);

// prefer using descriptive variable names to understand the purpose of the variable after prolonged absence or different user readability
var firstNameOfPersonWhoWon = "mahendra";
console.log(firstNameOfPersonWhoWon);

//check terminal/console for outputs


/*Familiar Mathematical Operators*/

//Math expressions are associated with numbers or variables assigned to numbers.
//The familiar operators are +,-,*,/ (arithmetic operators).
var firstNumber = 5;
var secondNumber = firstNumber + 100;
var thirdNumber = 15 * 20;
var fourthNumber = thirdNumber - secondNumber;

//one more operator the modulus % is used to find the remainder.
var balanceRemaining = 102 % 5; //this will assign the variable to number 2.

//in alert keyword too, mathematical operators work for numbers
alert(5+9); //the resultant of the mathematical expression is 14, which would be displayed as a string value. 
alert(firstNumber / secondNumber); //mathematical operators can be used for variables assigned to numbers
alert(firstNameOfPerson / second$name); //the output would be NaN (Not a number), as string variables cannot perform mathematical operations. 


/*Unfamiliar Mathematical Operators*/

//increament operator: a++, ++a
// decrement operator: a--, --a

var num = 1;
console.log("value of num = " + num);

var newNum = num++;
//num++ expression means num = num + 1
//increment is made after assigning the value

console.log("value assigned to newNum = " + newNum);
console.log("new value of num after increment operation = " + num);

var num2 = 10;
console.log("value of num2 = " + num2);

var newNum2 = ++num2;
//increment is made before assigning the value

console.log("value assigned to newNum2 = " + newNum2);
console.log("new value of num2 after increment operation = " + num2);

//note: here i have used strings to make the output readable. 
// the extra + sign is for concatenation, in simple terms it means to display a string and variable together on one line.
// without concatenation the program will display an error. 


/*Order of Precedence in Mathematical expressions*/

//JavaScript like in algebra follows precedence rules. 
//incase of ambiguity or confusion one can use paranthesis () to clear up the ambiguity.
var totalCost = 1 + 5 * 8; //the result is 41 and not 48
console.log(totalCost);

var newTotal = (2 + 9) * 3; //the result is 33
//notice the order in which calculations are to be done is clear
console.log(newTotal);

var total = (7 + 2) * (4 + 6); //the result is 90
//this removes ambiguity by using parenthesis
console.log(total);


/*Concatenating string */

//Concatenation is used to combine elements.
var message = "you are learning javascript";
alert("Thanks, " + message);
//here concatenating a string with a variable

//concatenation of three variables
var person = "babu";
var exclaim = "!"
alert(person + message + exclaim);

//concatenation of strings too can be done
alert("Hello friends, "+"hope you are doing well "+"!");

//concatenation of variables
var newmessage = person + message + exclaim;
alert(newmessage);

//concatenation of number strings
alert("2"+"2"); //will give the alert as 22.

//When code mixes strings and numbers, numbers are converted to strings.
alert("15"+6);


/* Prompts */

//prompt asks for a response from the user. 
var adult = prompt("How old are you?", "18");
//prompt comes with the question and a default response
//value is stored in a variable
//all values stored in a variable are a string
console.log(adult); //displaying the value of the variable

//the strings can be stored in a variable and the respective variable can be used in prompts
var question = "Are you Indian?";
var defaultAnswer = "Yes";
var indian = prompt(question, defaultAnswer);
console.log(indian);

//default responses are not mandatory
var fruits = prompt("How many fruits do you have?");
var morefruits = fruits + 1;
//the variable stores values as string
//concatenation of string and number gives a string
console.log(morefruits); 

//longer form of prompt method
var dogName = window.prompt("What is the name of your dog?");
console.log(dogName);


/* if statements */

var x = prompt("What is your nationality? (Enter your anser in all caps)");
//the if statement tests for a condition
if (x === "INDIAN"){
    //incase the condition is true then it will execute the below line
    alert("Bharat Mata ki jai");
}
//the tripe equal sign tests the both sides of the condition.
//single equal sign is used for assigning a value to a variable, it cannot be used for comparison of two values.

//comparison can be done using variables too
var a = "mango";
var b = prompt("Enter your favourite fruit");
if (a === b){
    alert("Our choices match");
    //you can have any number of statements to execute here.
}


/* Comparison Operators */

//equality operator - equal to, not equal to
//equal to already covered 

//not equal to
var yourTicketNumber = prompt("Enter your 6-digit ticket number");
if (yourTicketNumber !== 456127) {
    alert("Better luck next time.");
}
// alternatively you can use != instead of !==

//other comparison operators
    // > is greater than
    // < is less than
    // >= is greater than or equal to 
    // <= is less than or equal to
if (1 > 0) {
    alert("greater than tested");
}

if (0 < 1) {
    alert("less than tested");
}

if (1 >= 0) {
    alert("greater than or equal to tested");
}

if (0 <= 1) {
    alert("less than or equal to tested");
}


/* if else and else if statements */

// if else statement
if (x === "India") {
    alert("Correct!");
}
else {
    alert("Wrong answer");
}

//else if statements
var correctAnswer = "mango";
if ("apple" === correctAnswer) {
    alert("your answer matches in the 1st check");
}
else if ("orange" === correctAnswer) {
    alert("your answer is correct in the 2nd check");
}
else if ("mango" === correctAnswer){
    alert("you got the answer right finally");
}
else {
    alert("All chances over");
}
//you can have any number of chains for else if statements.