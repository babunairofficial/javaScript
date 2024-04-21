//create an unordered list
let ul = document.createElement("ul");
let btn = document.querySelector("button");
let input = document.querySelector("input");
let div = document.querySelector("div");

//append the unordered list to div element
div.appendChild(ul);

//function to perform on clicking the button
btn.addEventListener("click", function(){
    //add tasks as lists
    let lis = document.createElement("li");
    lis.innerText = input.value;

    //create delete buttons
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    //append delete button and lists to the unordered list
    lis.appendChild(delBtn);
    ul.appendChild(lis);
    input.value = "";
});

ul.addEventListener("click", function(event){
    console.log(event.target.nodeName); // lets us know which event has been clicked
    if(event.target.nodeName == "BUTTON"){ //BUTTON here is case-sensitive
        //to choose the parent Element of target 
        let listItem = event.target.parentElement;
        //to delete the entire parent line
        listItem.remove();
        console.log("deleted");
    }
});