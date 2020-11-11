const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.send('halaman respon feedback');
  });
  router.post('/', (request, response) => {
    response.send(`feedback posting`);
  });

  return router;
};

//module.exports =router;
