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