//q1
/*create new para*/
let para1 = document.createElement('p')
para1.innerText = "Hey I'm red";
/*insert color*/
para1.classList.add('red');
/*append the new para*/
document.querySelector("body").append(para1);


//q2
/*create new heading*/
let head1 = document.createElement('h3')
head1.innerText = "I'm a blue h3";
/*insert color*/
head1.classList.add('blue');
/*append the new para*/
document.querySelector("body").append(head1);