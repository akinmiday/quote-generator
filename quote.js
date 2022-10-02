// Variables


let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [
        {quote: `"The greatest glory in living lies not in never falling
        but in rising every time we fall"`,
        person: `Nelson Mandela`},

        {quote: `"The way to get started is to quit talking and begin doing."`,
        person: `Walt Disney`},

        {quote: `"Your time is limited, so don't waste it living someone else's life. 
        Don't be trapped by dogma – which is living with the results of other people's thinking"`,
        person: `Steve Jobs`},

        {quote: ` "If life were predictable it would cease to be life, and be without flavor."`,
        person: `Eleanor Roosevelt`},

        {quote: `" If you look at what you have in live, you'll always have more.
         If you look at what 
        you don't have in life, you'll never have enough"`,
        person : `Oprah Winfrey`},

        {quote: `" It does not matter how slowly you go as long as you do not stop"`,
        person: `Confucius`},


        {quote: `"Our lives begin to end the day we become silent about things that matter"`,
        person: `Martin Luther King Jr`},

        {quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck"`,
        person: `Dalai Lama`},

        {quote: `"The jourrney of a thousand miles begins with one step"`,
        person: `Lao Tzu`}
];


btn.addEventListener('click', function(){

    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})