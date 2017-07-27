const express = require('express');
const router = express.Router();
const Cat = require('../models/cat');

// get a list of cats from the db
router.get('/cats', function(req,res) {
  res.send({type:'GET'})
});

// add a new cat to the db
router.post('/cats', function(req,res) {
  Cat.create(req.body).then(function(cat) {
    res.send(cat);
  });
});

// update a cat in the db
router.put('/cats/:id', function(req, res) {
  res.send({typd:'PUT'});
});

// delete a cat from the db
router.delete('/cats/:id', function(req, res) {
  res.send({type:'DELETE'});
});

module.exports = router;
