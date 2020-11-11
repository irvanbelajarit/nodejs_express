const express = require('express');

const materiKuliahRoute = require('./materikuliah');
const feedbackRoute = require('./feedback');
const { request } = require('express');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (request, response) => {
    // response.send("hello world express");

    // response.sendFile(path.join(__dirname, './static/index.html'));

    if (!request.session.visitcount) {
      request.session.visitcount = 0;
    }

    request.session.visitcount += 1;
    console.log(`Jumlah yang Visit : ${request.session.visitcount}`);

    response.render('pages/index', { pageTitle: 'web programming' });
  });

  router.use('/materikuliah', materiKuliahRoute());
  router.use('/feedback', feedbackRoute(params));

  return router;
};

//module.exports =router;
