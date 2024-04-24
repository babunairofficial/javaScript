//sequence 
let gameSeq = []; /*used to store the sequence of colors displayed*/ 
let userSeq = []; /*used to store the sequence clicked by user*/

let btns = ["yellow", "red", "blue", "green"]; /*btns array*/

//initial values
let started = false; /*initial value set to false as the game has not started*/
let level = 0; /*initial level of game*/
let highScore = 0;
let body = document.querySelector("body");
let hS = document.createElement("h2");
body.append(hS);

let h2 = document.querySelector("h2");

//start game - key press
document.addEventListener("keypress", function(){
    if (started == false) { /*only executes if the game has not started previously */
        console.log("game started");
        started = true; /*value set to true as the game has started*/

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash"); /*added a new class for button flash */
    setTimeout(function(){
        btn.classList.remove("gameflash");
    }, 250);    
}

function userFlash(btn){
    btn.classList.add("userflash"); /*added a new class for user button flash */
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);    
}

//level up once game starts
function levelUp(){
    userSeq = [] //reset user sequence on level up
    level++; /*increase level*/
    h2.innerText = `Level ${level}`;

    //random color pick
    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`)

    //display random values generated
    console.log(randomIdx);
    console.log(randomColor);
    console.log(randomBtn);

    gameSeq.push(randomColor);
    console.log("game sequence = ",gameSeq);

    //flash button function 
    gameFlash(randomBtn);
}

function checkAns(idx){
    console.log("current level = ", level);
    
    if(userSeq[idx] == gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
        // levelUp();
       }
    }
    else{
        h2.innerHTML = `Game over! Your score was <b>${level}<b><br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "orange";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        
        //High Score        
        if(level-1 > highScore){
            highScore = level-1;
            console.log("new High score", highScore);
            hS.innerText += `${highScore}`; 
        }
        //display highScore               
        hS.innerText = `High Score = ${highScore}`;
        

        reset();
    }
}

//the function after a box is clicked
function btnPress(){
    console.log("btn was pressed");
    let btnPressed = this;
    userFlash(btnPressed);

    userColor = btnPressed.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

//set click property for box
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];

    // hS.remove();

    level = 0;
    console.log("Game reset");
}


