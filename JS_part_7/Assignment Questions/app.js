//Q1
let sum = 0;
const arrayAverage = (arr) => {
    for(let i = 0; i <arr.length;i++){
        sum +=arr[i];
    }
    return sum/arr.length;
}
let arr = [1,2,3,4,5,6,7,8,9];
console.log(arrayAverage(arr));

//Q2
const isEven = (n) =>{
    if(n%2==0){
        console.log("even");
    } else{
        console.log("odd");
    }
}
isEven(987);