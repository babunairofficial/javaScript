//Q1
/*create new Elements*/
let input = document.createElement("input");
let btn = document.createElement("button");
/*add text*/
btn.innerText ="Click Me";
/*selector*/
let body = document.querySelector("body");
/*append*/
body.append(input);
body.append(btn);
/*display body in javaScript*/
console.log(body);