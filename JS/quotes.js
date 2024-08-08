const quotes = [
    {quote:"I'm god" ,
        author:"smk"
    },
    {quote:"fear him" ,
        author:"baesh"
    },
    {quote:"wwwwwww" ,
        author:"lsm"
    },
    {quote:"coding is not funny" ,
        author:"now"
    },
    {quote:"lottery yummy" ,
        author:"lch"
    },
    {quote:"President Roh is still alive" ,
        author:"Pjh"
    },
    {quote:"a" ,
        author:"e"
    },
    {quote:"b" ,
        author:"f"
    },
    {quote:"c" ,
        author:"g"
    },
    {quote:"d" ,
        author:"h"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;