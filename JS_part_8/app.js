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