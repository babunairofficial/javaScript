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