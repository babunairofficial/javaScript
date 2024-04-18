//onclick
// let btn = document.querySelector("button");
// console.dir(btn);
// console.log(btn.onclick);
// btn.onclick = function(){
    // console.log("button was clicked");
    // alert("button was clicked");
// };
function sayHello(){
    alert("hello");
};
// btn.onclick = sayHello;

//onmouseenter
let btns = document.querySelectorAll("button");
for(btn of btns){
    // btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log("you entered a button");
    };
    
    //event listener
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName );
}

function sayName(){
    alert("Event Listeners");
}

let p = document.querySelector("p");
p.addEventListener("click",function(){
    console.log("paragraph was clicked");
});

let bx = document.querySelector("div") ;
bx.addEventListener("mouseenter",function(){
    console.log("mouse inside box");
});

