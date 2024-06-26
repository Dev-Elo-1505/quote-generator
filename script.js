const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('x-twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// let apiQuotes = [];

// show loader
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hide loader
function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// show new quote
function newQuote() {
    loading();
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // Check if author field is blank and replace with 'Unknown'
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    // Check quote length to determine styling
    if (quote.text.length > 70) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // set quote and hide loader
    quoteText.textContent = quote.text;
    complete();
}

// Get Quotes From API
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // catch error here
//     }
// }

// On load
// getQuotes();


// Tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Add event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
newQuote();
