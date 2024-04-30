let url = "https://catfact.ninja/fact";
console.log(url);

async function getFacts(){
    try{
        //let res = fetch(url);
        let res = await fetch(url);
        let data = await res.json();

        //console.log(res);
        console.log(data);
    } catch (e){ /*this line catches error*/
        console.log("error - ", e);
    }   
}

getFacts();
