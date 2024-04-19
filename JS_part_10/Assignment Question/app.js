//Q1
/*mouseout*/ 
let mouseOut = document.querySelector("#mouseout");
mouseOut.addEventListener("mouseout", (event) => {
    //change color on mouseout
    event.target.style.color = "orange";
    //timer to revert the changes
    setTimeout(() =>{
        event.target.style.color ="";        
    }, 500);
});

/*keypress*/
let keyPress = document.querySelector("#input");
let one = document.querySelector("#one");
keyPress.addEventListener("keypress", logKey);
function logKey(e){
    console.log(e.code); 
    one.innerText += e.code; //add up the texts  
}

/*scroll*/
const element = document.querySelector("div#scroll");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.innerHTML = "Scroll event fired!";
  setTimeout(() => {
    output.innerHTML = "Waiting on scroll events...";
  }, 1000);
});

/*load*/
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += `DOMContentLoaded\n`;
});

