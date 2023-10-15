const quotes = [
  {
    quote:
      'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    author: 'Ralph Waldo Emerson',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: 'Robert Frost',
  },
  {
    quote:
      'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote: 'To be or not to be, that is the question.',
    author: 'William Shakespeare (from Hamlet)',
  },
  {
    quote:
      'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
    author: 'Martin Luther King Jr.',
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: 'Albert Einstein',
  },
  {
    quote:
      'The only thing necessary for the triumph of evil is for good men to do nothing.',
    author: 'Edmund Burke',
  },
  {
    quote: 'To love oneself is the beginning of a lifelong romance.',
    author: 'Oscar Wilde',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
