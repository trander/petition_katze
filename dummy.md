{
  "name" : "cat1",
  "dosen" : "person1",
  "available" : true,
  "sign" : "cat1",
  "geometry" : {"type" : "point", "coordinates": [-81.4, 33.1 ] }
}


{
  "name" : "cat2",
  "dosen" : "person2",
  "available" : false,
  "sign" : "cat2",
  "geometry" : {"type" : "point", "coordinates": [-79.4, 26 ] }
}


{
  "name" : "cat3",
  "dosen" : "person3",
  "available" : true,
  "sign" : "cat3",
  "geometry" : {"type" : "point", "coordinates": [-85.4, 25 ] }
}


{
  "name" : "cat4",
  "dosen" : "person4",
  "available" : false,
  "sign" : "cat4",
  "geometry" : {"type" : "point", "coordinates": [-77.4, 11 ] }
}


{
  "name" : "cat5",
  "dosen" : "person5",
  "available" : false,
  "sign" : "cat5",
  "geometry" : {"type" : "point", "coordinates": [-73.4, 27 ] }
}


{
  "name" : "cat6",
  "dosen" : "person6",
  "available" : false,
  "sign" : "cat6",
  "geometry" : {"type" : "point", "coordinates": [-85.4, 28 ] }
}


{
  "name" : "cat7",
  "dosen" : "person7",
  "available" : true,
  "sign" : "cat7",
  "geometry" : {"type" : "point", "coordinates": [-81.4, 11 ] }
}


{
  "name" : "cat8",
  "dosen" : "person8",
  "available" : false,
  "sign" : "cat8",
  "geometry" : {"type" : "point", "coordinates": [-34.4, 15 ] }
}


{
  "name" : "cat9",
  "dosen" : "person9",
  "available" : true,
  "sign" : "cat9",
  "geometry" : {"type" : "point", "coordinates": [-36.4, 17 ] }
}








<!-- Schema -->
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
