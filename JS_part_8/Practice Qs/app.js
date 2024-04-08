//q1
let arr = [10, 20, 30, 40, 50];

let result = arr.every((el)=>el%10==0);
console.log(result);

//q2
let arr2 = [12,78,34,98,25,77];

let min = arr2.reduce((n,el)=>{
    if(n<el){
        return n;
    }else{
        return el;
    }
});
console.log(min);