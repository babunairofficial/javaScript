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
