const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    // response.send("hello world express");

    // response.sendFile(path.join(__dirname, './static/index.html'));

    response.render('pages/index', { pageTitle: 'web programming' });
  });
  return router;
};

//module.exports =router;
