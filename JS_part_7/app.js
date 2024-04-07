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