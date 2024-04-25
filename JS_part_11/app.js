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


//Promises
/*
function savetoDb(data){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed >4){
        console.log("your data was saved: ", data);
    } else{
        console.log("weak connection, data not saved");
    }    
}

savetoDb("babu nair");
*/

/*
function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed >4){
        success();
    } else{
        failure();
    }    
}

savetoDb("babu nair", () => {
    console.log("success: your data was saved");
    savetoDb("hello world", () => {
        console.log("success2: your data was saved");
        savetoDb("coder", () => {
            console.log("success3: your data was saved");
        }, () =>{
            console.log("failure3: weak connection, data was not saved");
        });
    }, () => {
        console.log("failure2: weak connection, data was not saved");
    });
}, () => {
    console.log("failure: weak connection, data not saved");
});
*/

function savetoDb(data){
    
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("success: data was saved");
        } else {
            reject("failed: weak connection");
        }
    });
}



let request = savetoDb("javascript"); //req = promise object
request.then(() => {
    console.log("promise was resolved");
    console.log(request);
})
.catch(() => {
    console.log("promise was rejected");
    console.log(request);
});


//Promise chaining - Improved Version

let req = savetoDb("javascript"); //req = promise object
req.then(() => {
    console.log("data 1 saved");
    return savetoDb("helloworld");    
    })
    .then(()=> {
        console.log("data 2 saved");
        return savetoDb("babu nair");
})
.then(() => {
    console.log("data 3 saved");
})
.catch(() => {
    console.log("promise was rejected");    
});