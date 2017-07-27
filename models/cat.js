const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2ndsphere'
  }
});

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
  },
  sign: {
    type: String
  },
  geometry : GeoSchema
});

const Cat = mongoose.model('cat', CatSchema);

module.exports = Cat;
