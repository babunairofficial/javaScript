//event Propagation - bubbling
/*
let div1 = document.querySelector("#div1"); 
let div2 = document.querySelector("#div2"); 
let div3 = document.querySelector("#div3"); 
  
div1.addEventListener("click", function (event) {
    alert("Component 1 event clicked");
    });
div2.addEventListener("click", function (event) { 
    alert("Component 2 event clicked"); 
    }); 
  
div3.addEventListener("click", function (event) { 
    alert("Component 3 event clicked"); 
    });
*/

//event propagation - capturing
let div1 = document.querySelector("#div1"); 
let div2 = document.querySelector("#div2"); 
let div3 = document.querySelector("#div3"); 

div1.addEventListener("click", function (event) { 
    alert("Component 1 event clicked"); 
    }, true); 

div2.addEventListener("click", function (event) { 
    alert("Component 2 event clicked"); 
}, true); 

div3.addEventListener("click", function (event) { 
    alert("Component 3 event clicked"); 
}, true);  