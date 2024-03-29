const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const citySchema = new Schema({
  _id: {
    type: Number
  },
  name: {
    type: String
  },
  state: {
    type: Number,
    ref: 'State'
  }
}, { timestamps: true });

const City = mongoose.model('City', citySchema);
module.exports = City;