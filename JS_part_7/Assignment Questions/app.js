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

//Q3
const object = {
    message: "Hello, World!",

    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);

//Q4
let length = 4;
function callback(){
    console.log(this.length);
}

const object2 = {
    length: 5,
    method(callback){
        callback;
    },
};

object2.method(callback, 1, 2);