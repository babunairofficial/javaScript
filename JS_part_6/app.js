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
