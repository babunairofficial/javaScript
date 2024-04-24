//call stack
console.log("call stack"); 
function hello(){ /*level 3*/
    console.log("inside hello function- level 3");
}

function demo(){ /*level 2*/
    console.log("calling hello function- level 2")
    hello();
}

console.log("calling demo function- level 1") /*level 1*/
demo();
console.log("done! thanks- level 4"); /*level 4*/


//visualizing the Call Stack
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

//JS is single threaded
/*synchronous nature*/
let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a-b);

//browser holds the setTimeout function and displays after the required delay
//browser is multi threaded
/*asynchonous nature of javascript*/
setTimeout(() => {
   console.log("JavaScript") 
}, 2000); //this line will execute after 2 seconds
setTimeout(() => {
    console.log("Hello world") 
 }, 2000); //this line will execute after 2 seconds
console.log("hello....");


//Callback Hell
/*callback nesting => callback hell*/
let h1 = document.querySelector("h1");

function changeColor(color, delay,nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red",1000, () => {
    changeColor("orange",1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, ()=> {
                changeColor("pink", 1000);
            });
        });
    });
});


/*
let h1 = document.querySelector("h1");

function changeColor(color, delay){
    setTimeout(() => {
        h1.style.color = color;
    }, delay);
}

changeColor("red",1000);

changeColor("orange",2000);

changeColor("green",3000);
*/

/*
setTimeout(changeColor("red") => {
    h1.style.color = "red";
}, 1000);

setTimeout(() => {
    h1.style.color = "orange";
}, 2000);

setTimeout(() => {
    h1.style.color = "green";
}, 3000);
*/