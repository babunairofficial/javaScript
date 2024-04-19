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