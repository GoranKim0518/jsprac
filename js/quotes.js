const quotes = [
    {
        quote: "orem ipsum dolor sit amet, consectetur adipiscing elit.",
        author: "1"
    },
    {
        quote: "Aenean mattis sapien in tortor pharetra, sit amet porta nisi rhoncus.",
        author: "2"
    },
    {
        quote: "Curabitur vulputate sit amet sem ut vulputate.",
        author: "3"
    },
    {
        quote: "Duis in tellus neque. Phasellus id ipsum sapien. Duis pellentesque lorem sed massa facilisis, efficitur viverra ligula commodo.",
        author: "4"
    },
    {
        quote: "Aenean imperdiet dui quis elementum faucibus.",
        author: "5"
    },
    {
        quote: "Etiam tempus tincidunt molestie. Proin at lectus id mauris aliquet dignissim nec et nisi.",
        author: "6"
    },
    {
        quote: "Pellentesque varius eros at efficitur suscipit. Quisque vel hendrerit ligula.",
        author: "7"
    },
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        author: "8"
    },
    {
        quote: "Mauris non vulputate nulla, non posuere mi.",
        author: "9"
    },
    {
        quote: "Aliquam sollicitudin orci in leo dignissim, at sodales nisi vehicula.",
        author: "10"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;