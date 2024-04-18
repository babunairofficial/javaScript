let btn = document.querySelector("button");

btn.addEventListener("click", function(event){
    console.log(event); //event is a pointer
    console.log("button clicked");
});

btn.addEventListener("dblclick", function(event){ //double click
    console.log(event);
    console.log("button clicked");
});


//keyboard events
let input = document.querySelector("input");
input.addEventListener("keydown", function(event){
    console.log(event);
    console.log("key was pressed");
    console.log("key = ", event.key);
    console.log("code = ", event.code);
})