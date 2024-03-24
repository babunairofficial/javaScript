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

 //Q4
 let str = prompt("enter string");
 if(str[0] === 'A' || str[0] ==='a' && str.length >5){
    console.log(str,"is a golden string");
 }
 else{
    console.log(str,"is NOT a golden string");
 }

 //Q5
 let a=34;
 let b=54;
 let c=12;
 let largest;
 if(a>b){
    console.log(largest=a);
 }
 else{
    console.log(largest=b);
 }
 if(largest>c){
    console.log("largest number is",largest);
 }
 else{
    console.log("largest number is", c);
 }

 //Q6
 let x=prompt("enter a number");
 let y=prompt("enter another number");
 if(x[x.length-1] == y[y.length-1]){
    console.log(x,"and",y,"have the same last digit i.e.",x[x.length-1]);
 }
 else{
    console.log("no match");
 }