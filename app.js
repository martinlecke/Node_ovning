const express = require('express');
const books = require('./json/books.json');

const app = express();

app.get('/books/title/:title', (req,res) => {
  let titles = books.filter( (book) => {
    return book.title.toLowerCase().includes( req.params.title.toLowerCase() );
  });
  res.json(titles);
});

app.get('/books/author/:author', (req,res) => {
  let authors = books.filter( (book) => {
    return book.author.toLowerCase().includes( req.params.author.toLowerCase() );
  });
  res.json(authors);
});

app.get('/books/language/:language', (req,res) => {
  let languageBooks = books.filter( (book) => {
    return book.language.toLowerCase().includes( req.params.language.toLowerCase() );
  });
  res.json(languageBooks);
});

app.get('/books/country/:country', (req,res) => {
  let countrys = books.filter( (book) => {
    return book.country.toLowerCase().includes( req.params.country.toLowerCase() );
  });
  res.json(countrys);
});

app.get('/books/pages/:pages', (req,res) => {
  let pages = books.filter( (book) => {
    return book.pages >= req.params.pages
  });
  res.json(pages);
});

app.get('/books/year/:fromYear-:toYear', (req,res) => {
  let year = books.filter( (book) => {
    return book.year >= req.params.fromYear && book.year <= req.params.toYear
  });
  res.json(year);
});

app.get('/books', (req,res) => {
  res.json(books);
});

app.use(express.static('www'));

app.get('*', (req, res) => {
  // console.log(res);
  res.send('Nu fungerar det bättre, asdasaasdasdasda');
  res.end();
});

app.listen(3000, () => {
  console.log('Port 3000 används!')
});