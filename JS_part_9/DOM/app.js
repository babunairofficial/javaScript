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