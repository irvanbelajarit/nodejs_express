const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.send('Ini list materi Kuliah');
  });
  router.get('/:matkul', (request, response) => {
    response.send(`Ini  materi Kuliah ${request.params.matkul}`);
  });

  return router;
};

//module.exports =router;
