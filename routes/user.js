const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.json({
        body:{
            message:"ini router user"
        }
    })
  });


  return router;
};

//module.exports =router;
