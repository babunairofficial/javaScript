//Q1
let dice = Math.floor(Math.random()*6)+1;
console.log("the number in dice roll is",dice);

//Q2
const car = {
    name: prompt("enter name of car"),
    model: prompt("enter model of car"),
    color: prompt("enter color of car")
};
console.log("the car's name is ",car.name);

//Q3
const Person = {
    name: "babu",
    age: 33,
    city: "Mumbai"
};
console.log(Person);
Person.city = "New York";
Person.country = "India";
console.log(Person);