//variables

let btn = document.querySelector('#newQuote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

//quotes

const quotes = [{
    quote:"You have to dream before your dreams can come true.",
    person:"Dr. A.P.J Abdul Kalam"
},{
    quote:"What is necessary to change a person is to change his awareness of himself.",
    person:"Abraham Maslow"
},{
    quote:"You drown not by falling into a river, but by staying submerged in it.",
    person:"Paulo Coelho"
},{
    quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    person: "Helen Keller"
},{
    quote:"I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.",
    person:"Rabindranath Tagore"
},{
    quote:"The optimist thinks this is the best of all possible worlds. The pessimist fears it is true.",
    person:"J. Robert Oppenheimer"
},{
    quote:"Whoever is happy will make others happy too.",
    person:"Anne Frank"
},{
    quote:"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
    person:"Bruce Lee"
},{
    quote:"It is a melancholy truth that even great men have their poor relations.",
    person:"Charles Dickens"
},{
    quote:"Nature never did betray the heart that loved her.",
    person:"William Wordsworth"
},];

//eventlistener

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);

/*text edits*/
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
