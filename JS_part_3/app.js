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

//array methods
let cars = ["audi", "bmw", "mercedes", "aston"];
console.log(cars);
cars.push("toyota")
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift("toyota");
console.log(cars);
let removed = cars.shift();
console.log(removed);
console.log(cars);

//indexOf
let primary = ["red","yellow","blue"];
console.log(primary);
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("green"));
console.log(primary.indexOf("Yellow"));

//includes
console.log(primary.includes("blue"));

//concat
let secondary = ["orange","green","violet"];
let allcolors = primary.concat(secondary);
console.log(allcolors);
let colorsall = secondary.concat(primary);
console.log(colorsall);

//reverse
console.log(cars);
console.log(cars.reverse());
//changes are made to the original array
console.log(cars);
console.log(cars.reverse());

//slice
let colors = ["red","yellow","blue","orange","pink","white"];
console.log(colors.slice(2,3));
console.log(colors.slice(-2));
console.log(colors.slice(2));

//splice
console.log(cars);
console.log(cars.splice(3));
console.log(cars);
console.log(cars.splice(0,1));
console.log(cars);
console.log(cars.push("maruti"));
cars.push("ferrari");
console.log(cars);
cars.splice(0,0,"toyota","xuv");
console.log(cars);
cars.splice(1,0,"tatasumo");
//1,0 -> means at the 1nth position , 0 deletion
//insert string "tatasumo" at that position.
console.log(cars);
cars.splice(1,1,"gwagon");
//1,1 -> means at the 1nth positon, 1 deletion
//string "tatasumo" is deleted, and "gwagon" is inserted
console.log(cars);

//sort
let days = ["Monday", "Sunday", "Wednesday", "Tuesday"];
console.log(days);
days.sort();
console.log(days);
//numbers are converted into string and then sorting is done. 

//array references
//Elements in array eventhough similar have different address in memory, 
//hence they are not identified as equal
let arr = ['a', 'b'];
let arrCopy = arr;
console.log("arrCopy = ",arrCopy);
arrCopy.push('c');
console.log("arr = ",arr);

//constant arrays
const arra = [1,2,3,4];
arra.push(5);
console.log(arra);

//nested arrays
let nums = [[1,2],[3,4],[5,6]];
console.log("nums = ",nums);
console.log("length of nums = ",nums.length);
console.log("nums[0] = ",nums[0]);
console.log("length of nums[0] = ",nums[0].length);
console.log("nums[0][1] = ",nums[0][1]);