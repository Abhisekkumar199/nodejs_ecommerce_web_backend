const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const stateSchema = new Schema({
  _id: {
    type: Number
  },
  name: {
    type: String
  },
  cities: [
    {
      type: Number,
      ref: 'City'
    }
  ],
  country: {
    type: Number,
    ref: 'Country'
  }
}, { timestamps: true });

const State = mongoose.model('State', stateSchema);
module.exports = State;