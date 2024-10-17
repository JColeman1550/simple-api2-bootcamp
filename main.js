document.addEventListener("DOMContentLoaded", function() {
const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".name");
const quoteButton = document.querySelector("button");


// random quote function

function randomQuote() {
    quoteButton.classList.add("loading");
    quoteButton.innerText = "Loading Quote..."
    fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
            'X-Api-Key': 'eA9TGU821dewMN+qckGESg==hCH3CHoh36J7QbfV'
        }
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        quoteText.innerText = result[0].quote;
        authorName.innerText = result[0].author;
        quoteButton.innerText = "New Quote";
        quoteButton.classList.remove("loading");
    })
    .catch(error => {
        console.error('Error:', error);
    });


}
quoteButton.addEventListener("click", randomQuote);

});






