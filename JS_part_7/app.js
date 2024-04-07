//this keyword
const student = {
    name: "babu",
    age: 33,
    eng: 80,
    maths: 95,
    phy: 58,
    getAvg(){
        console.log(this);
        let avg = (this.eng+this.maths+this.phy)/3;
        console.log(avg);
    }
};

console.log(student.getAvg());

//try & catch
console.log("hello");
console.log("hello");
try{
    console.log(a);
} catch(err){
    console.log("variable a doesn't exist");
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

//arrow functions
const sum = (a,b) =>{
    console.log(a+b);}
sum(2,3);

const cube = (n) =>{
    return n*n*n;
}
console.log(cube(3));

const pow = (a,b) =>{
    return a ** b;
}
console.log(pow(2,3));

const hello = () =>{
    console.log("hello world");
}
hello();
/*Arrow functions - Implicit return */
const mul = (a,b) => (a*b);
console.log(mul(4,8));

const square = (x) =>(x*x);
console.log(square(9));

//set Timeout
console.log("Hi there!");

setTimeout(() =>{
    console.log("My World");
},4000);

console.log("welcome to");

//set Interval
let id = setInterval(()=>{
    console.log("babu's world");
},2000); //this will create infinite execution of setInterval
console.log(id);
clearInterval(id);//to stop setInterval from executing

//this with arrow functions
const student1 = {
    name: "sachin",
    marks: 95,
    prop: this, //global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () =>{
        console.log(this); //parent's scope
        return this.marks;
    },
    getInfo1: function (){
        setTimeout(() => {
            console.log(this); //student
        }, 2000);
    },
    getInfo2: function (){
        setTimeout(function (){
            console.log(this); //window
        },2000);
    },
};
console.log(student1);
const a = 5; //global scope
console.log(student1.getName());
console.log(student1.getMarks());

console.log(student1.getInfo1());
console.log(student1.getInfo2());