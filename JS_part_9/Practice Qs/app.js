//q1
/*create new para*/
let para1 = document.createElement('p');
para1.innerText = "Hey I'm red";
/*insert color*/
para1.classList.add('red');
/*append the new para*/
document.querySelector("body").append(para1);


//q2
/*create new heading*/
let head1 = document.createElement('h3');
head1.innerText = "I'm a blue h3";
/*insert color*/
head1.classList.add('blue');
/*append the new heading*/
document.querySelector("body").append(head1);


//q3
/*create new elements*/
let div1 = document.createElement("div");
let head2 = document.createElement('h1');
let para2 = document.createElement("p");
/*add texts in elements*/
head2.innerText = "I m in a div";
para2.innerText = "ME TOO!";
/*append elements to div element*/
div1.append(head2);
div1.append(para2);
/*add styling through new class creation*/
div1.classList.add("box");
/*append div in body */
document.querySelector("body").append(div1);