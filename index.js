const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express up
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/petitionKatze');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/petition', require('./routes/petition'));

// error handling middleware
app.use(function(err, req, res, next){
  //console.log(err);
  res.send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 3000, function() {
  console.log('Listening for requests (3000).');
})
