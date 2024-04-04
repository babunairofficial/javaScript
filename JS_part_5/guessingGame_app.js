//Guessing Game
const max = prompt("enter a max number");
console.log("max number is",max);

/*use const to fix the random number or else 
it will be difficult to guess every time a new random number*/
const random = Math.floor(Math.random()*max)+1;

let guess = prompt(`to guess the random number between 1 and ${max} enter a number`);

//conditions
while(true){
    if(guess == "quit"){
        console.log("the user has quit");
        break;
    }
    if(guess == random){
        console.log("your guess is correct, the random number is",guess);
        break;
    } else if(guess < random){
        guess = prompt("hint: your guess was too small. please guess again")
    }
    else{
        guess = prompt("hint: your guess was too large. please guess again");        
    }
}
