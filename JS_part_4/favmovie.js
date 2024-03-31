let favmovie = "Avatar";
let guess = prompt("guess favourite movie");
while((guess!=favmovie)/*&&(guess!="quit")*/){
    //break keyword
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    console.log("wrong guess");
    guess = prompt("wrong guess. try again");
}

if(guess == favmovie){
    console.log("Congratulations. You have guessed right")
}