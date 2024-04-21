let ul = document.createElement("ul");
let btn = document.querySelector("button");
let input = document.querySelector("input");
let div = document.querySelector("div");
div.appendChild(ul);
btn.addEventListener("click", function(){
    let lis = document.createElement("li");
    lis.innerText = input.value;
    ul.append(lis);
    input.value = "";
});

