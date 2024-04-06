//functions
/*function definition*/
function hello(){
    console.log("hello friends");
}
/*function calling */
hello();

//Functions with arguments
function printInfo(name,age){
    console.log(`${name}'s age is ${33}.`);
}

printInfo("babu",33);
printInfo(14);//here it is assigned as 14 belongs to 1st argument

//Return keyword
function sum(a,b){
    console.log("hello");
    return a+b;
    console.log("will not print this line");
}
console.log(sum);
let s = sum(3,4);
console.log(s);
console.log(sum(2,8));
console.log(sum(sum(3,5),4));

//Scope
let sum1 = 54; //Global Scope
function calSum(a,b){
    let sum1 = a+b; //Function Scope
    console.log(sum1);
}
calSum(1,2);
for(let i=1;i<=10;i++){
    console.log(i); //block scope
}

function outerfunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x); //Lexical Scope
        console.log(y);
    }
    innerFunc();   
}
outerfunc();

//function expressions
let name = "babu";
let sum2 = function(a,b){
    return a+b;
}
console.log(sum2); 
console.log(sum2(1,2)); //calling a function using its associated variable name

let welcome = function(){
    console.log("hello");
}
console.log(welcome);

//Higher Order Functions
/*Takes one or multiple functions as arguments */
function multipleGreet(func, n){
    for(let i = 1;i<=n;i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}
multipleGreet(greet,2);

/*Returns a function */
function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    } else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    } else{
        console.log("wrong request");
    }
}
let request = "even";
let funct = oddEvenTest(request);
console.log(funct);
console.log(funct(10));
console.log(funct(5));