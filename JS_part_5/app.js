//object literals
let delhi = {
    latitude: "28.7041 N",
    longitude: "77.1025 E"
};

const student = {
    name: "babu",
    age: 32,
    marks: 96.2,
    city: "Delhi"
};

console.log(delhi);
console.log(student);

//thread post using object literals
const post = {
    username: "@babunair",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@navybrat","@villain"]
};
console.log(post);

//get values of object literals
console.log(post.content);
console.log(post["content"]);

//conversion in Get values
/*1, 2, are not indexes..
true, null undefined are not values 
they are key in the form of string*/
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};
console.log(obj);
console.log(obj[1]);
console.log(obj[true]);
console.log(obj.null);
//obj.1 will give error

//add/update values in objects
const person = {
    name: "babu",
    age: 23,
    marks: 96.2,
    city: "Delhi"
};
console.log(person);
person.city = "Mumbai";
console.log(person);
person.gender = "male";
console.log(person);
person.marks = "A";
/*values can be changed from numbers to strings*/
console.log(person);
person.marks = [99,89,97];
/*arrays can also be entered as values */
console.log(person);
//key can also be deleted
delete person.age;
console.log(person);

//object of objects
const classInfo = {
    Dharmendra: {
        grade: "A+",
        city: "Delhi"
    },
    sunny: {
        grade: "A+",
        city: "Pune"
    },
    bobby: {
        grade: "O",
        city: "Mumbai"
    }
};
console.log("object of objects :",classInfo);
console.log("Dharmendra =",classInfo.Dharmendra);
console.log("sunny =",classInfo.sunny);
console.log("city of bobby =",classInfo.bobby.city);
/*making changes in objects.*/
classInfo.sunny.city = "Mumbai";
console.log("sunny has changed city, sunny =",classInfo.sunny);

//array of objects
const classInfo2 = [
    {
        name: "manoj",
        grade: "B+",
        city: "chambal"
    },
    {
        name: "vikram",
        grade: "A+",
        city: "delhi"
    },
    {
        name: "sandeep",
        grade: "A+",
        city: "Bengaluru"
    }
];
console.log("array of objects :",classInfo2);
console.log("element in index 0 is an object:",classInfo2[0]);
console.log("element in index 1 is an object:",classInfo2[1]);
console.log("name key in object at indexed 2 is:",classInfo2[2].name);
console.log("grade key in index 2:",classInfo2[2].grade);
console.log("city key in index 2:",classInfo2[2].city);
classInfo2[2].city = "Pune";
console.log("changed city in array to",classInfo2[2].city);

//Math Object
console.log("Math Object =",Math);
console.log("value of PI :",Math.PI);
console.log("Value of E :",Math.E);
console.log("absolute value of -123 :",Math.abs(-123));
console.log("2 to the power of 3 :",Math.pow(2,3));
console.log("Math.floor(5.0001) :",Math.floor(5.0001));
console.log("Math.floor(5.9999999) :",Math.floor(5.9999999));
console.log("Math.ceil(5.00001) :",Math.ceil(5.00001));
console.log("Math.ceil(5.5) :",Math.ceil(5.5));
console.log("Math.random :",Math.random());
console.log("Math.random :",Math.random());

//Random Integers
console.log("random integers:");

let step1 = Math.random();
console.log(step1);
let step2 = step1 * 10;
console.log(step2);
let step3 = Math.floor(step2);
console.log(step3);

/*one liner code. 
+1 is added to get 10 from 0 to 10  */
let random = Math.floor(Math.random()*10) + 1;
console.log("random integer =",random);