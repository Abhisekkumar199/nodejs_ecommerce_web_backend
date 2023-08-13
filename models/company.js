const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const companySchema = new Schema({
  logo: {
    type: String
  },
  companyname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String 
  },
  city: {
    type: String 
  },
  pincode: {
    type: String,
    required: true
  },
  bankname: {
    type: String,
    required: true
  },
  account_number: {
    type: String,
    required: true
  },
  gstin_number: {
    type: String,
    required: true
  },
  pan_number: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Company = mongoose.model('Company', companySchema);
module.exports = Company;