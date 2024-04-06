let arr = [1,2,3,4,5,6,7,8,9];
let n = 5;
console.log(arr);
function largeElements(n){
    for(let i = 0; i<=arr.length-1;i++){
        if(arr[i]>n){
            console.log(arr[i]);
        }
    }
}
largeElements(n);