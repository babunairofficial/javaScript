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