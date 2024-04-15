//q1
/*create new para*/
let para1 = document.createElement('p')
para1.innerText = "Hey I'm red";
/*insert color*/
para1.classList.add('red');
/*append the new para*/
document.querySelector("body").append(para1);