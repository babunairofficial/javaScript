let btn = document.querySelector("#fact");

btn.addEventListener("click", async () =>{
    console.log("fact button was clicked");
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
})

//axios
let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e){
        console.log("error - ", e);
        return "No fact Found";
    }
}

let btn2 = document.querySelector("#image");

btn2.addEventListener("click", async () =>{
    console.log("image button was clicked");
    let link = await getImage();
    console.log(link);

    let img = document.querySelector("#display");
    img.setAttribute("src", link);
})

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getImage(){
    try{
        let res2 = await axios.get(url2);
       return res2.data.message;
    } catch (e2){
        console.log("error - ", e2);
        return "No image Found";
    }
}

const url3 = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config = {headers:{Accept: "application/json"}}; //json format
        let res3 = await axios.get(url3, config);
        console.log(res3);
    } catch(err){
        console.log(err);
    }
}