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