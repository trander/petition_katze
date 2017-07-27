const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create cat Schema & Model
const CatSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required.']
  },
  dosen: {
    type: String,
    required: [true, 'Dosen field is required.']
  },
  available: {
      type: Boolean,
      default: false
  }
});

const Cat = mongoose.model('cat', CatSchema);

module.exports = Cat;
