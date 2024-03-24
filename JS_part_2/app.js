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

//else statement
let trafficLight = "white";
if(trafficLight === "red"){
    console.log("Stop! The Traffic Light is Red");
}
if(trafficLight === "yellow"){
    console.log("Slow Down, The Traffic Light is Yellow");
}
if(trafficLight === "green"){
    console.log("Go, the Traffic Light is Green");
}
else{
    //no conditions are required for else statement. it can execute whatever is written inside.
    console.log("The Traffic Light is broken");
}

//Nested if-else
let marks = 32;
if(marks >= 33){
    if(marks >= 80){
        console.log("Grade : O");
    }
    else{
        console.log("Grade : A");
    }
}
else{
    console.log("Better Luck Next Time");
}

//Logical Operators
let mark=93;
if(mark>=33 && mark >=80){
    console.log("pass");
    console.log("A+");
}