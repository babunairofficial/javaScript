//Array Methods

/*forEach */
let arr = [1, 2, 3, 4, 5];

let print = function (el){
    console.log(el);
};

arr.forEach(print);

//OR

arr.forEach(function(el){
    console.log(el);
});

let arr1 = [{
    name: "sachin",
    score: 98
},
{
    name: "sehwag",
    score: 100
},
{
    name: "dravid",
    score: 99
}];
console.log(arr1);
arr1.forEach((player) => {
    console.log(player.score);
});

//map 
let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el*2;
});
console.log(double);

let students =[
    {
        name: "suresh",
        marks: 95
    },
    {
        name: "ramesh",
        marks: 94.4
    },
    {
        name: "rajesh",
        marks: 92
    }
];
let gpa = students.map((el) => {
    return el.marks /10;
});
console.log(gpa);

//filter
let nums = [1,2,3,4,5,6,7,8,9,10,11,12];
let ans = nums.filter((el) => {
    return el % 2 == 0; //even ->true, odd -> false
});
console.log(ans);

//Every
let a = [2, 4, 6];
console.log(a.every((el) => el % 2 == 0 ));

//some
let b = [1,2,3,4];
let c = [1,3];
console.log(b.some((el) => el%2 == 0));
console.log(c.some((el) => el%2 == 0));

//reduce method
let d = [10,11,12,13];
console.log(d.reduce((res,el) => (res+el)));
/*finding maximum in an array */
let numbers = [2,3,4,5,3,4,7,8,1,2];
let result = numbers.reduce((max,el) =>{
    if(el>max){
        return el;
    } else{
        return max;
    }
});
console.log(result);

//Default parameters
function sum(a,b=2){
    return a+b;
}
console.log(sum(5)); //always assigned to first parameter

//spread
let arr2 = [1,2,3,4,5,6,6,7,8,9,0,11,2,11,3,44,66,17,23];
let min = Math.min(...arr2);
console.log(min);
console.log(arr2);
console.log(...arr2);
let str = "babu nair";
console.log(...str);

//Spread - with array literals
let arr3 = [1,3,5,7,9];
let newArr = [...arr3];
console.log(newArr);

let chars = [..."hello"];
console.log(chars);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let all = [...odd, ...even];
console.log(all);

//Spread - with object literals
const data = {
    email: "abc@xyz.com",
    password: "ABCD"
};
//const dataCopy = {...data};
const dataCopy = {...data,  id: 123, country:"India"};
console.log(dataCopy);

let arr4 = [1,2,3,4,5]; //arr -> value
let obj1 = {...arr4}; //obj -> key: value
console.log(obj1);

let obj2 = {..."hello"};
console.log(obj2);