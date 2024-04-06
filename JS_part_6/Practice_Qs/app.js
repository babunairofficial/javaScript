//Practice Q1
function printPoem(){
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are");
    console.log("up above the world so high");
    console.log("like a diamond in the sky");
}

printPoem();

//Practice Q2
function diceRoll(){
    let dice = Math.floor(Math.random()*6)+1;
    console.log("The dice roll gives:",dice);
}

diceRoll();

//Practice Q3
function avg(a,b,c){
    let sum = a+b+c;
    console.log("average of 3 numbers is ",sum/3);
}

console.log(avg);
avg(5,71,35);
avg(32,94,19);

//Practice Q4
function numTable(number){
    for(let i =1;i<=10;i++){
        let multiply = number*i;
        console.log(`${number} x ${i} = ${multiply}`);
    }
}
console.log(numTable);
numTable(7);

//Practice Q5
function returnSum(n){
    let total = 0;
    for(let i=1;i<=n;i++){
        total = total+i;
    }
    return total;
}
console.log(returnSum);
console.log("the sum to numbers is ",returnSum(100));

//Practice Q6
let str = ["hi","hello","bye","!"];
function concatStrings(str){
    let result = "";

    for(let i=0; i<str.length;i++){
        result += str[i];
    }

    return result;

}
console.log(concatStrings);
console.log(str);
console.log(concatStrings(str));

//Practice Q7
let greet = "hello";

function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();