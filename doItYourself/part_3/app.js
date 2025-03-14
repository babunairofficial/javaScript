/* Functions */

//functions are a block of code that needs to be executed multiple times, by invoking its name

//create a function named 'multiply' to find the product of two numbers
function multiply() { 
    var a = prompt("enter the value of a");
    var b = prompt ("enter the value of b");
    var prod = a * b;
    alert ("product of numbers is " + prod);    
}

//call the function 
multiply();

//note: naming of functions is similar to naming a variable, it follows the same properties.

4
/* Passing data to functions */

//in addition to calling a function, data too can be passed with it. 
//the data that is passed is called an argument

var message = "Welcome!";

//define a function
function displayMessage(message) { //the function parameter name can be anything
    return message;
}

//call the function
console.log(displayMessage(message));
//note: function has been called along with an argument

//a variable having a value 76
var number = 76;

//define the function
function multipleOfFive(n) { //notice that the parameter of the function is have a different name
    //there is no need to declare this variable, as the declaration is implicit when used as  parament of a function
    return n * 5;
}

//call the function, with argument as the variable named, number
var product = multipleOfFive(number);
//storing the end result in another variable named, product

//log the result for debugging
console.log("multiple of 5 is " + product);

//in a function argument, any number of arguments separated by commas can be passed.
//the naming of arguments do not have to match with that of arguments. 
// only the order in which the variables are used matter
//the variables used as arguments are matched with the variables used as parameter in the order they are used with the function parenthesis.

var month = "february";
function winnerOfMonth(a, str, w) { //notice three variables used as parameters
    alert(a + str + w);
}

//notice three arguments are passed
winnerOfMonth(month, "'s winner number is ", 15);


/* Passing data back from Functions */

//declare a function with paramenters
function sum(x, y) {
    return x + y;
    //returns a single value
}

//call a function with parameters
var ans = sum(3, 4);
//log the result
console.log(ans);


/* Local vs Global variables */

//Variables declared Globally (outside any function) have Global Scope.
var y = 1000; //global scope

//Variables declared inside a { } block cannot be accessed from outside the block
{
    let x = 5;
}

//Variables declared within a JavaScript function, are LOCAL to the function:
function myFunction() {
    let person = "sachin";
    // code here CAN use person
  }
  
//a parameter is a local variable

function message(word1, word2) {
    var text = word1 + word2; //local scope
    return text; //transfer the value of local variable to global varable
}
var output = message("hello", "world"); //global scope