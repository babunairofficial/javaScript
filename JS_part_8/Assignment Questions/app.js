//Q1
let arr = [1,2,3,4,5];

const square = arr.map((el) =>{
    return el*el;
});

let sum = arr.reduce((add,el)=> (add+el));

console.log(arr);
console.log(square);
console.log(sum);

let average = sum/arr.length;
console.log(average);

//Q2
let arr2 = [10,11,12,13,14];

const newArr = arr2.map((el) =>el+5);

console.log(arr2);
console.log(newArr);

//Q3
const words = ["tendulkar","sehwag","dravid","laxman","ganguly","singh"];

let UPPER = words.map((word) =>word.toUpperCase());

console.log(words);
console.log(UPPER);

//Q4
const doubleAndReturnArgs = (arr3, ...args) => [
    ...arr3, 
    ...args.map((v) =>v*2),
];

console.log(doubleAndReturnArgs([1,2,3],4,4)); //1,2,3,8,8
console.log(doubleAndReturnArgs([2],10,4)); //2,20,8

//Q5
const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a:1, b:2},{c:3,d:4}));
