//JSON data - parse
let jsonRes = '{"fact":"Cheetahs do not roar, as the other big cats do. Instead, they purr.","length":67}';

/*raw form of json data as a string*/
console.log("json data as an string:");
console.log(jsonRes);

/*converting json data as a JS object*/
console.log("now let's covert the json data to JS object:");
let validRes = JSON.parse(jsonRes);
console.log(validRes);


//JSON data - stringify
let student = {
    name: "babu nair",
    marks: 95,
};

/*JS object*/
console.log("JS object form:")
console.log(student);

/*converting JS object to  json data*/
console.log("JSON data form:")
let stuReq = JSON.stringify(student);
console.log(stuReq);


//first API request
let url = "https://catfact.ninja/fact";

fetch(url)
.then((res) => {
    console.log(res);
    res.json().then((data) => {
        console.log(data);
    });
})
.catch((err) => {
    console.log("Error - ", err);
});