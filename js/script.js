/* name: quotes, type: variable of quotes object.
   info: Holds all the quotes objects. The Object has properties: quotes, which
      holds the quote string; source, which holds the source/origin of the quote;
      citation, which holds the information of where the quote are from; year, the
      year it is from.
*/
var quotes = [
  {
    quote: `Be yourself; everyone else is already taken`,
    source: "Oscar Wilde",
    citation: "NVS",
    year: "1885",
    tags:["Life in general"]
  },
  {
    quote: `Good, better, best. Never let it rest. Til your good is better and your better is best`,
    source: "ST. Jerome",
    citation: "NVS",
    year: "390 AD.",
    tags:["Life in general"]
  },
  {
    quote: `Failure isn’t fatal, but failure to change might be`,
    source: "John Wooden",
    citation: "Forbes",
    year: "1971",
    tags:["Business", "Failure", "Motivation"]
  },
  {
    quote: `Only those who dare to fail greatly can ever achieve greatly`,
    source: " Robert F. Kennedy",
    citation: "Forbes",
    year: "1960",
    tags:["Business", "Failure", "Motivation", "Forbes"]
  },
  {
    quote: `Giving up is the only sure way to fail`,
    source: "Gena Showalter",
    citation: "Forbes",
    year: "2006",
    tags:["Business", "Failure", "Motivation", "Forbes"]
  },
  {
    quote: `Failure should be our teacher, not our undertaker.
            Failure is delay, not defeat. It is a temporary detour, not a dead end.
            Failure is something we can avoid only by saying nothing, doing nothing, and being nothing`,
    source: "Denis Waitley",
    citation: "Forbes",
    year: "1990's",
    tags:["Failure", "Motivation"]
  }
];

/*
  Time variables to keep track of time
*/
var timeID;            //ID variable of time interval.
var timeOut = 30000; //Timeout in ms for how long a quote wil be displayed.
setTime();           //inits the time and starts counting.

/*name: unwhatched quotes, type: array to keep track of quotes whatched
  info: contains every index of every unwhatced quote. It is initialized to the
  quotes array length
*/
var unWatchedQuotes;

/* name: unwhatched quotes init, type: function
   info: Inits the whatcedQuotes array.
*/
function unWhatchedQuotesInit(){
  unWatchedQuotes = quotes.slice().map((x, index) => index);

}

/* name: get random number, type: function
   info: Gets a random number value from an given array, removes the index and value from
   the array and returns the value.
   parameters: array, the array to get the random value from.
   return: a random number value from the given array.
*/
function getRandomValueFromArray(array){
  var randomNumber = Math.floor(array.length * Math.random()); /*Find a random number in the index range*/
  randomNumber = array.splice(randomNumber, 1);/*Array is returned from the splice method, should only return 1 value. Returning that value. Splice removes a item from an array*/
  //console.log(randomNumber[0]);
  return randomNumber[0];
}

/* name: getRandomQuote(quotes), type: function
   info: Selects a random quote from the quotes array and returns it.
   parameters: quotes, quotes array, which holds quote objects.
   return: quote object
*/
function getRandomQuote(quotes){
  if(!unWatchedQuotes || unWatchedQuotes.length === 0){ // reInit the whatchedArray when all quotes has been whatched.
    unWhatchedQuotesInit();
    //console.log(unWatchedQuotes.join(", "));
  }
  var randomNumber = getRandomValueFromArray(unWatchedQuotes);
  //console.log(quotes[randomNumber]);
  return quotes[randomNumber];
}

// Event listener to respond to "Show another quote" button clicks
function printQuote(){
  var quote = getRandomQuote(quotes);
   document.getElementById('quote-box').innerHTML=`
      <p class="quote"> ${quote.quote} </p>
      <p class="source"> ${quote.source}
        <span class="citation"> ${quote.citation} </span>
        <span class="year"> ${quote.year} </span>
      </p>
      <p class="tags"><span class="tag">${quote.tags.join(", ")}</span><p>
    `;
}

// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", () => {
  printQuote();
  setTime();
}, false);

/* name: timeOut, type: function
   info: Resets the timer.
*/
function setTime(){
  //Set timeout
  if(timeID !== undefined || timeID !== null){//If time is not null or undefined clear the timout variable.
    //console.log("interval cleared!");
    clearInterval(timeID);
  }
  timeID = window.setInterval(printQuote, timeOut);
}
