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