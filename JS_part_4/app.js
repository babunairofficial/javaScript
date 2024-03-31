//loops
for(let i=1;i<=10;i++){
    console.log(i);
}

//print all odd numbers
console.log("print odd numbers from 1 to 15");
for(let j=1;j<=15;j=j+2){
    console.log(j);
}

//print even numbers
console.log("print even numbers from 2 to 20");
for(let k=2;k<=20;k=k+2){
    console.log(k);
}

//print multiplication table
let n = prompt("enter a number n for a multiplication table");
console.log("the multiplication table of ",n,"is :");
for(let a=1; a<=10;a++){
    console.log(n,"x",a,"=",a*n);
}

//nested loop
for(let m=1;m<=3;m++){
    console.log(`outer loop ${m}`);
    for(let p=1;p<=3;p++){
        console.log(p);
    }
}

//while
console.log("while loop: ");
let q=1;
while(q<=5){
    console.log(q);
    q++
}

//loops with arrays
let fruits = ["banana","grapes","orange","mango","apple"];
for(let i =0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

//nested loops with nested arrays
let heroes = [["ironman","spiderman","thor"],["superman","wondarwoman","flash"]];
console.log(heroes);
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
    for(let j=0;j<heroes[i].length;j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}

//for of loop
let fruits1=["mango","litchi","apple","banana","orange"];
for(fruit of fruits1){
    console.log(fruit);
}
//Nested for of loop
console.log("nested for of loop");
let heroes1 = [["ironman","spiderman","thor"],["superman","wondarwoman","flash"]];
for(list of heroes1){
    for(hero of list){
        console.log(hero);
    }
}