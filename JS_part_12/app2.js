//JSON data - parse
let jsonRes = '{"fact":"Cheetahs do not roar, as the other big cats do. Instead, they purr.","length":67}';

/*raw form of json data as a string*/
console.log("json data as an string:");
console.log(jsonRes);

/*converting json data as a JS object*/
console.log("now let's covert the json data to JS object:");
let validRes = JSON.parse(jsonRes);
console.log(validRes);

