//Q1.
let arr = [7,9,0,-2];
let n = 3;
console.log(arr.splice(0,n));

//Q2.
let arr2 = [7,9,0,-2];
console.log(arr2.splice(-n));

//Q3
let str = prompt("enter a string");
if(str.length ==0) {
console.log("the string is blank");
}
else {
console.log("the string is not blank");
}

//Q4
let strTest = "sAcHIn TichkUle";
let num = 4;
if(strTest[num] == strTest[num].toLowerCase()){
console.log("the given character is at lowercase");
}
else {
console.log("the given character is not at lowercase");
}

//Q5
let newStr = "     web development    ";
console.log(newStr);
console.log(newStr.trim());