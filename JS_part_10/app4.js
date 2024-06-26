let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("form submitted");

//extracting form data
    // let inp = document.querySelector("input");
    // console.dir(inp);
    // console.log(inp.value);

    // let user = document.querySelector('#user');
    let user = this.elements[0]; //another way of writing
    let pass = document.querySelector('#pass');

    console.dir(this.elements);
    console.log(this.elements);

    console.dir(this.elements[0]);
    console.log(this.elements[0]);

    console.log("user value = ",user.value);
    console.log("password value = ",pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

//change event
let user = document.querySelector("#user");

user.addEventListener("change", function(){
    console.log("input changed");
    console.log("final value = ", this.value);
});

//input event - tracks each changes in element
user.addEventListener("input", function(){
    console.log("input event");
    console.log("final value = ", this.value);
});

let textEditor = document.querySelector("#editor");
let p = document.querySelector("#para");

//text editor using input event
textEditor.addEventListener("input", function(){
    console.log(textEditor.value);
    p.innerText = textEditor.value;
})
