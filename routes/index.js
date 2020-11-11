const express = require('express');

const materiKuliahRoute = require('./materikuliah');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (request, response) => {
    // response.send("hello world express");

    // response.sendFile(path.join(__dirname, './static/index.html'));

    response.render('pages/index', { pageTitle: 'web programming' });
  });

  router.use('/materikuliah', materiKuliahRoute());
  router.use('/feedback', feedbackRoute(params));

  return router;
};

//module.exports =router;
