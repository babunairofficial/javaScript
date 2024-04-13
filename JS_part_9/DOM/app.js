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