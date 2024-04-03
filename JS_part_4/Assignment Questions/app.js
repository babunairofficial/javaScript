//Q1
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
console.log(arr);
for(let i = 0; i < arr.length; i++){
    if(arr[i] == num){
        arr.splice(i, 1);
    }
}
console.log("Result : ",arr);

//Q2
let number = 287152;
console.log("number = ",number);
let counter = 0;
while(number>0){
    counter++;
    //Math.floor() method is used to give nearest integer
    number = Math.floor(number/10);
}
console.log("count = ",counter);

//Q3
number = 287152;
console.log("number = ",number);
let sum = 0;
while(number>0){
    sum = sum + number%10;
    number = Math.floor(number/10);
}
console.log("sum =",sum);