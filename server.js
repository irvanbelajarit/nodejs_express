const express = require('express');

const mongoose = require('mongoose');

const path = require('path');
const cookieSession = require('cookie-session');

const FeedbackService = require('./services/FeedbackService');

const feedbackService = new FeedbackService('./data/feedback.json');

const routes = require('./routes');

const app = express();

const port = 3000;

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['irvan', 'webprogramming'],
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use(
  '/',
  routes({
    feedbackService,
  })
);

app.listen(port, () => {
  console.log(`express server listening on port ${port}! `);
});

mongoose.connect(
  "mongodb://127.0.0.1:27017/db-untar-cafe",{useNewUrlParser:true,useUnifiedTopology:true}
);
const db = mongoose.connection;

db.once("open",()=>{
  console.log("sukses koneksi database menggunakan mongoose");
});