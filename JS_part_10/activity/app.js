let btn = document.querySelector("button");

//using eventListener to perform functions on click
btn.addEventListener("click", function(){
    console.log("Generate random color");

    /*for h3 elements*/
    let head = document.querySelector("h3");
    let randomColor = getRandomColor(); //call the function 
    head.innerText = randomColor; // change text to random values for color
    console.log("color updated"); 
    
    /*for div elements*/
    let box = document.querySelector("div");
    box.style.backgroundColor = randomColor; //using the random values for bg color
});

//getting a Random RGB Color code
function getRandomColor(){
    
    /*using Math.random to generate random numbers*/
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    /*returning the random values*/
    let color = `RGB(${red}, ${green}, ${blue})`;
    return color;
}