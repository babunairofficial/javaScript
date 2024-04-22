//sequence 
let gameSeq = []; /*used to store the sequence of colors displayed*/ 
let userSeq = []; /*used to store the sequence clicked by user*/

//initial values
let started = false; /*initial value set to false as the game has not started*/
let level = 0; /*initial level of game*/

//start game - key press
document.addEventListener("keypress", function(){
    if (started == false) { /*only executes if the game has not started previously */
        console.log("game started");
        started = true; /*value set to true as the game has started*/
    }
});