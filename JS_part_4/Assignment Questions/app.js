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

//Q4
let n = prompt("Enter a number to find its factorial");
console.log("n =",n);
let factorial = 1;
for(let i = 1; i<=n;i++){
    factorial = factorial * i;
}
console.log("factorial of", n, "is =",factorial);

//Q5
let array = [2, 5, 10,4,2,7,1,9];
console.log(array);
let largest = 0;
for(let i = 0;i<array.length;i++){
    if(array[i]>largest){
        largest = array[i];
    }
}
console.log("the largest number in the array is :", largest);