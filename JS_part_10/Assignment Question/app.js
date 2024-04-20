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


//Q2
let newBtn = document.createElement("button");

newBtn.innerText = "click here";

let currentQ2 = document.getElementById("q2");
currentQ2.append(newBtn);
newBtn.addEventListener("click", function(){
  newBtn.style.backgroundColor = "green";
});


//Q3
let name = document.querySelector("#name"); 
let heading = document.querySelector("h2");

name.addEventListener("input", updateName); // calling the funciton


function updateName() {
    let nameInput = name.value;
    let sanitizedInput = nameInput.replace(/[^a-zA-Z ]/g, ''); // Replace non-letter and non-space characters with empty string
    name.value = sanitizedInput; // Update the input value
    heading.innerText = "User's Name: " + sanitizedInput; // Update the heading text
}

