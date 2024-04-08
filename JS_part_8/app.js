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