console.log("Hello World");
console.log("first javaScript");
let a=10;
let b=5;
console.log("sum is ", a+b);
//this is a comment


let pencilPrice = 10;
let eraserPrice = 5;
console.log("The total price is : ", pencilPrice+eraserPrice, " Rupees.");
//another way
let penPrice = 20;
let markerPrice = 30;
// let output = "The total price is : " + (penPrice+markerPrice) + " Rupees.";
//Temperate Literals
let output = `The total price is : ${penPrice+markerPrice} Rupees`;
console.log(output);

//Arithmetic Operators
let m = 10;
let n = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Unary Operators
console.log(m++);
console.log(++m);
console.log(n--);
console.log(--n);

//comparison Operators
let age = 10;
console.log(age>18);
console.log(age<18);
console.log(age!=18);
let y = '10';
console.log(age==y);
console.log(age===y);

//conditional statements
console.log("before my if statement");
let age$ = 23;
if(age$ >= 18){
    console.log("you can vote");
}
console.log("after my if statement");

//elseif statements
let age1 = 14;
if(age >= 18){
    console.log("you can vote");
}
else if(age<18){
    console.log("you cannot vote");
}