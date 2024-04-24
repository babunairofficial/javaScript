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