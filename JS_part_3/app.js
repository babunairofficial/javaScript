//String Methods
//.trim()
let msg = "           Hello          ";
console.log(msg);
console.log(msg.trim());

//.toUpperCase() & .toLowerCase
let name = "Babu Nair";
let NAME = name.toUpperCase();
console.log(NAME);
console.log(name.toLowerCase());

//method chaining
let newMsg = msg.trim().toUpperCase();
console.log("new msg after method chaining: ",newMsg);

//slice
let prog = "JavaScript";
console.log("slice from 0 to 4:",prog.slice(0,4));
console.log("slice from 5th position to end of lenght:",prog.slice(5));
console.log("slice from the end:",prog.slice(-1));
