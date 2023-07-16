
const arrayquote=
[
    {'author': 'Oscar Wilde ', 
    'quote': 'Be yourself; everyone else is already taken.'
   },

   {'author': 'Albert Einstein', 
   'quote': 'Two things are infinite the universe and human stupidity and I\'m not sure about the universe.'
  },
  {'author': 'Frank Zappa', 
  'quote': 'So many books, so little time.'
 },
 {'author': 'Marcus Tullius Cicero ', 
 'quote': 'A room without books is like a body without a soul.'
},
{'author': 'Mahatma Gandhi ', 
'quote': 'Be the change that you wish to see in the world.'
},
{'author': 'Jim Rohn', 
'quote': 'Beware of what you become in pursuit of what you want.'
},
];
function randomquote(){

    const rando =  Math.floor(Math.random() * arrayquote.length);
    document.getElementById("quote").innerHTML = arrayquote[rando].quote;
    document.getElementById("author").innerHTML = arrayquote[rando].author;
}
