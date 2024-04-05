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