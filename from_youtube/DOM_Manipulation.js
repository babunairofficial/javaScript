 //DOM Manipulation



//GetElementById()

const title = document.getElementById('main-heading');

console.log(title);



//GetElementByClassName()

const listItem = document.getElementsByClassName('list-items');

console.log(listItem)


//getElementsByTagName()
const headingTag = document.getElementsByTagName('h1');
console.log(headingTag);

//querySelector() - selects the first matching tag 

const container = document.querySelector('div');
console.log(container);



//querySelectorAll()

const containerAll = document.querySelectorAll('div');
console.log(containerAll);