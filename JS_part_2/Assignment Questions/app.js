//Q1
let q1 = prompt("enter a number");
if(q1 % 10 == 0){
    console.log("good! The number is divisible by 10");
}
else{
    console.log("bad");
}

//Q2
let name = prompt("enter your name");
let age = prompt("enter your age");
console.log(name,"is",age,"years old");

//Q3
 let quarter=4;
 switch(quarter){
    case 1:
        console.log("Months in Quater 1 : January, February, March");
        break;
        case 2:
        console.log("Months in Quater 2 : April, May, June");
        break;
        case 3:
        console.log("Months in Quater 3 : July, August, September");
        break;
        case 4:
        console.log("Months in Quater 4 : October, November, December");
        break;
 }
