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

//Q2
/*setAttribute*/
// input.placeholder = "username"; 
//or
input.setAttribute("id","btn");
// btn.id = "btn";
//or
input.setAttribute("placeholder","username");
/*display body in javaScript*/
console.log(body);

//Q3
/*select btn element*/
document.querySelector("#btn");
/*add new class*/
btn.classList.add("btnstyle");//add new class btnstyle to btn element
console.log(body);

//Q4
/*create h1 element*/
let head1 = document.createElement("h1");
/*add text and underline using innerHTML*/
head1.innerHTML = "<u>DOM Practice<U>";
/*add color by assigning new class "head"*/
head1.classList.add("head");
/*append head1 to body*/
body.append(head1);
/*display body in javaScript*/
console.log(body);