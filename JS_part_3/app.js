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

//replace
let str = "IloveCoding";
console.log(str.replace("love", "pasand"));

//repeat
let fruit = "Mango";
console.log(fruit.repeat(3));

//Array
let cricketers = ["tendulkar", "sehwag","ganguly","dravid"];
console.log(cricketers);
console.log(cricketers[0]);
console.log(cricketers[0][0]);

//arrays are mutable
cricketers[0] = "rohit";
console.log(cricketers);
cricketers[10] = "kumble";
console.log(cricketers);