//getElementById
/*returns the element as an object*/
let imgObj = document.getElementById("mainImg");
console.log(imgObj); 
console.dir(imgObj);
/*print properties*/
console.log(imgObj.src);
console.log(imgObj.tagName);
console.log(imgObj.id);
/*making changes in element*/
imgObj.src = "assets/Detective_Comics_27_(May_1939).png";
console.log(imgObj.src);

let paragraph = document.getElementById("description");
console.log(paragraph);
console.dir(paragraph); /*check tagname, id in the object*/


//getElementByClassName
let oldImg= document.getElementsByClassName("stamp");
console.log(oldImg);
console.dir(oldImg);

for(let i= 0; i<oldImg.length; i++){
    console.dir(oldImg[i]); //each image as an object
    console.dir(oldImg[i].src); //check source of each image
}


//getElementByTagName
let para = document.getElementsByTagName("p");
console.log(para);
console.dir(para);
document.getElementsByTagName("p")[1].innerText = "abc";
console.dir(para);

console.dir(document.getElementsByTagName("span"));


//query Selectors
console.dir(document.querySelector("h1")); //Selects first h1 element

console.dir(document.querySelector("#description")); //Selects first element with id = description

console.dir(document.querySelector(".stamp")); //Selects first element with class = stamp

console.dir(document.querySelector("div a")); //Selects first element within div element's a (anchortag) element

console.dir(document.querySelectorAll("p")); //Selects all p elements


//DOM Manipulation - using properties & Methods
let para2 = document.querySelector('p');
console.dir(para2.innerText); //shows the visible text contained in a node
console.dir(para2.innerHTML); //shows all the full markup
console.dir(para2.textContent); //shows all the full text
/*to manipulate*/
para2.innerText = "xyz";
para2.innerText = "hi guys, i am manipulating innertext using javascript"
para2.innerHTML = "hi guys, using <b>markup</b> changes"

let heading = document.querySelector('h1');
console.dir(heading.innerText);
heading.innerHTML = "<u>Batman</u>";

heading.innerText = "Bruce Wayne";
heading.innerHTML = `<u>${heading.innerText}</u`; //making changes to markup without knowing the innertext
console.dir(heading.innerHTML);
console.dir(heading.innerText);

//manipulating attributes - getters & setters
let image = document.querySelector("img");
console.log(image);
console.dir(image.getAttribute("id")); //getter
image.setAttribute("id","Batmanimg"); //setter
console.log(image);

//manipulating style
/*style property - can access only inline styling*/
console.log(heading.style);
console.dir(heading.style);

heading.style.color = "purple";
console.log(heading.style);
heading.style.backgroundColor = "yellow";
console.log(heading.style);

let links = document.querySelectorAll('.box a');
console.log(links);
for(let i = 0;i <links.length; i++){
    links[i].style.color = "red";
}

