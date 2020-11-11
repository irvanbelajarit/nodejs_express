const express = require('express');

const path = require('path');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
  // response.send("hello world express");

  // response.sendFile(path.join(__dirname, './static/index.html'));

  response.render('pages/index', { pageTitle: 'web programming' });
});

app.listen(port, () => {
  console.log(`express server listening on port ${port}! `);
});
