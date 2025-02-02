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