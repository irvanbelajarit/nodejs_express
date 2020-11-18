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

  router.get('/all', async (req, res) => {
    const users = await UserModel.find();

    try {
      res.send(users);
    } catch (err) {
      res.send(err);
    }
  });

  router.get('/:id', async (req, res) => {
    // res.send(req.params.id);
    const id = req.params.id;

    const user = await UserModel.findById(id);

    try {
      res.send(user);
    } catch (err) {
      res.send(err);
    }
  });

  router.get('/name/:name', async (req, res) => {
    const name = req.params.name;

    const user = await UserModel.find({ name: name });

    try {
      res.send(user);
    } catch (err) {
      res.send(err);
    }
  });

  router.get('/email/:email', async (req, res) => {
    const email = req.params.email;

    const user = await UserModel.where('email').equals(email);

    try {
      res.send(user);
    } catch (err) {
      res.send(err);
    }
  });

  // delete
  router.delete('/del/:id', async (req, res) => {
    const id = req.params.id;

    const deleteUser = await UserModel.deleteMany({
      _id: id,
    });
    try {
      res.send(deleteUser);
    } catch (err) {
      res.send(err);
    }
  });

  return router;
};

//module.exports =router;
