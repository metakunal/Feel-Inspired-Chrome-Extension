fetch('https://type.fit/api/quotes')
    .then(data => data.json())
    .then(quotes => {
        const num = Math.floor(Math.random() * quotes.length);
        const item = quotes[num];
        let singleQuote = item.text;
        singleQuote = "💡 " + singleQuote;
        const quoteElement = document.getElementById('quote');
        quoteElement.innerHTML = singleQuote;
        // console.log(singleQuote);
    })






// console.log("hey");