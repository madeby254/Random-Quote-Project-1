/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Created an array storing the quotes
const quotes = [
  {
    quote: "I don't fight for the money. I fight for my legacy. I fight for history. I fight for my people.",
    source: 'Khabib Nurmagomedov',
    year: "2018",
    genre: "Sports"
  },
  {
    quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    source: 'Barack Obama,',
    genre: " Politics"
  },
  {
    quote: 'Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love',
    source: 'Lao Tzu',
    genre: " Philosophy"
  },
  {
    quote: 'Let us always meet each other with smile, for the smile is the beginning of love.',
    source: 'Mother Teresa',
    genre: " Religion"
  },
  {
    quote: 'Education is the most powerful weapon which you can use to change the world.',
    source: 'Nelson Mandela',
    year: "2013",
    genre: " Education"
  },
  {
    quote: 'Hi i am Dave',
    source: 'Dave McFarland',
    year: "1800",
    genre: " Treehouse"
  },
];



/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => {
  let formula = Math.floor(Math.random() * quotes.length);
  return quotes[formula];
  
  }


/***
 * `printQuote` function
***/


const  printQuote = () => {
	let retrieveQuote = ( getRandomQuote() );
	let printing = "<p class='quote'>" + retrieveQuote.quote + "</p>";
	printing  += "<p class='source'>" + retrieveQuote.source;
	if ( retrieveQuote.year ) {
		printing  += "<span class='year'>" + '<span> </span>' + retrieveQuote.year + "</span>"
	};
	if ( retrieveQuote.genre ) {
		printing += "<cite class='genre'>" + retrieveQuote.genre + "</cite>"
	};
	printing  += "</p"
	document.getElementById( 'quote-box' ).innerHTML = printing;
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

const generateRandomColor = () =>
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor
    //random color will be generated
};

setInterval(printQuote, 5000) /**Loads a new quote every 5 seconds */
setInterval(generateRandomColor,5000) /**Gets a random color every 5 seconds */


document.getElementById('load-quote').addEventListener("click", printQuote, false);