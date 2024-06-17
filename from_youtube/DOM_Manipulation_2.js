//DOM Manipulation

//Event Listeners

//element.addEventListener("click", function);

const button2 = document.querySelector('.btn-2');
function alertBtn(){
    alert('I also love JavaScript');
};
button2.addEventListener("click", alertBtn);

//Mouseover

const newBgColor = document.querySelector('.box-3');
function changeBgColor(){
    newBgColor.style.backgroundColor = 'blue'
};

newBgColor.addEventListener("mouseover", changeBgColor);