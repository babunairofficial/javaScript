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

//Q2
let str = "abcdabcdefggh";


function uniqueChar(str){
    let ans="";
    for(let i = 0; i<str.length;i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            //if current character is not added, then add it in ans.
            //otherwise it is a duplicate.
            ans +=currChar;
        }
    }
    return ans;
}

console.log(uniqueChar(str));

//Q3
let country = ["Australia", "Germany", "United States of America"];

function longestCountryName(country){
    let longest = "";
    for(let i = 0; i<country.length;i++){
        let str = country[i];
        if(str.length>longest.length){
            longest = str;
        }
    }
    return longest;
}
console.log(longestCountryName(country));

//Q4
let str2 = "Happy Birthday";

function countVowels(str2){
    let count = 0;
    for(let i = 0; i<str2.length; i++){
        if((str2[i]=="a") ||
        (str2[i]=="e") ||
        (str2[i]=="i") ||
        (str2[i]=="o") ||
        (str2[i]=="u")){
            count++;
        }
    }
    return count;
}

console.log(countVowels(str));

//Q5
let start = 5;
let end = 10;
function ranNum(start, end){
    let diff = end - start;
    let random = Math.floor(Math.random()*diff)+start;
    return random;
}

console.log(ranNum(start, end));
