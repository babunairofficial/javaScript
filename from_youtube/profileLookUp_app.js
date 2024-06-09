var contacts = [ //creating an array
    {   //[0]- 1st object
        "firstName":"Tony",
        "LastName":"Stark",
        "number":"7894561234",
        "likes":["Pizza", "Coding", "Brownie Points"]
    },
    {   //[1] - 2nd Object
        "firstName":"Bruce",
        "LastName":"Banner",
        "number":"9876543217",
        "likes":["Hogwarts", "Magic", "Hagrid"]
    },
    {   //[2] - 3rd Object
        "firstName":"Steve",
        "LastName":"Rogers",
        "number":"8975642311",
        "likes":["Intriguing Cases", "Violin"]
    },
    {   //[3] - 4th Object
        "firstName":"Clint",
        "LastName":"Barton",
        "number":"8795462134",
        "likes":["JavaScript", "Gaming", "foxes"]
    }    
];

function lookUpProfile(name, prop){ //passing the name and property
    var ctr = 0;
    for(var i = 0; i<contacts.length; i++){
        if(name == contacts[i].firstName){
            return contacts[i][prop];
            ctr++
        }
    }
    return "Profile Does Not Exist"

}

var data = lookUpProfile("Tony", "likes");
console.log(data);
