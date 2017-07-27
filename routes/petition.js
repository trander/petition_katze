const express = require('express');
const router = express.Router();
const Cat = require('../models/cat');

// get a list of cats from the db
router.get('/cats', function(req, res, next) {
  // Cat.find({})then(function(cats) {
  //   res.send(cats);
  // });
  Cat.geoNear(
    {type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    {maxDistance: 100000, spherical:true}
  ).then(function(cats){
      res.send(cats);
  });
});

// add a new cat to the db
router.post('/cats', function(req, res, next) {
  Cat.create(req.body).then(function(cat) {
    res.send(cat);
  }).catch(next);
});

// update a cat in the db
router.put('/cats/:id', function(req, res, next) {
  Cat.findByIdAndUpdate({_id:req.params.id}, req.body).then(function() {
    Cat.findOne({_id:req.params.id}).then(function(cat) {
      res.send(cat);
    });
  });
});

// delete a cat from the db
router.delete('/cats/:id', function(req, res, next) {
  // console.log(req.params.id);
  Cat.findByIdAndRemove({_id: req.params.id}).then(function(cat) {
      res.send(cat);
  });
});

module.exports = router;
