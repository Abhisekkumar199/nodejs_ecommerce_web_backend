const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  _id: {
    type: Number
  },
  sortname: {
    type: String
  },
  name: {
    type: String
  },
  states: [
    {
      type: Number,
      ref: 'State'
    }
  ]
}, { timestamps: true });

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;