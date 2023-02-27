const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;
app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})

//GET random quotes.
app.get('/api/quotes/random', (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  if (randomQuote) {
    res.send({ quote: randomQuote })
  } else { 
    res.status(404).send();
  }
});

//GET all quotes or all quotes from an author.
app.get('/api/quotes', (req, res, next) => {
  const filteredQuotes = quotes.filter(element => {
    return element.person === req.query.person;
  });
  if (req.query.person) {
    res.send({ quotes: filteredQuotes });
  } else {
    res.send({ quotes: quotes });
  };
});

//POST for adding new quotes.
app.post('/api/quotes', (req, res, next) => {
  const newQuote = req.query.quote;
  const newPerson = req.query.person;
  if(newQuote != '' && newPerson != '') {
    const newElement = { quote: newQuote, person: newPerson };
    quotes.push(newElement);
    res.status(201).send({ quote: newElement });
  } else {
    res.status(400).send();
  }
});