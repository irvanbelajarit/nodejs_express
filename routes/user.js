const express = require('express');
const User = require('../models/User');

const router = express.Router();

const UserModel = require('../models/User');

module.exports = () => {
  router.get('/', (request, response) => {
    response.json({
      body: {
        message: 'ini router user',
      },
    });
  });

  router.post('/add', async (req, res) => {
    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    // res.send(user);

    // user.save(function (err, resp) {
    //   if (err) return res.send(err);
    //   res.send(resp);
    // });

    const save = await user.save();
    try {
      res.send(save);
    } catch (err) {
      res.send(err);
    }
  });

  return router;
};

//module.exports =router;
