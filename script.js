const quoteContainerElement = document.getElementById("quote-container");
const quoteTextElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const twitterBtnElement = document.getElementById("twitter");
const newQuoteBtnElement = document.getElementById("new-quote");
const loaderElement = document.getElementById("loader");


// Show Loading
function loading() {
  loaderElement.hidden = false;
  quoteContainerElement.hidden = true;
}

// Hide loading
function complete() {
  loaderElement.hidden = true;
  quoteContainerElement.hidden = false;
}

// show new quotes
function newQuote() {
  loading();

  // Pick a random quote from Quote List
  const quote = quotesList[Math.floor(Math.random() * quotesList.length)];

  if (!quote.author) {
    authorElement.textContent = "Unknown";
  } else {
    authorElement.textContent = quote.author;
  }

  if (quote.text.length > 120) {
    quoteTextElement.classList.add("long-quote");
  } else {
    quoteTextElement.classList.remove("long-quote");
  }
  quoteTextElement.textContent = quote.text;
  complete();
}

// async function getQuote() {
//     loading()
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl)
//         quotesList = await response.json();
//         newQuote()
//     } catch (error) {
//         console.log(error);
//     }
// }

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteTextElement.textContent} - ${authorElement.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listener
newQuoteBtnElement.addEventListener("click", newQuote);
twitterBtnElement.addEventListener("click", tweetQuote);

// Load Quote
newQuote()

