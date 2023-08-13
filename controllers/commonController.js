const State = require('../models/state');  
const City = require('../models/city');  
const Company = require('../models/company');
const mongoose = require('mongoose');
 

// get state list
const getStates = async(req, res) => { 
  try{    
    const states = await  State.find({ country:req.params.id }).sort({ name: 1 });
    console.log(states);
    res.status(200).send({success:true,msg:'State data',data:states});
  }catch(error){ 
    res.status(400).send({success:false,msg:error.message});
  } 
} 

// get city list
const getCities = async(req, res) => { 
  try{ 
    console.log(req.params.id);
    const cities = await  City.find({ state:req.params.id }).sort({ name: 1 });   
    res.status(200).send({success:true,msg:'City data',data:cities});
  }catch(error){
    res.status(400).send({success:false,msg:error.message});
  } 
}   

const isEmailExist = async(req, res) => {  
    const emailCheck = await  Company.find({ email:req.body.email })
    .then(result => {
      if(result.length!=0){
        res.status(200).send({success:false,msg:'Email id exist'});
      }else{ 
        res.status(200).send({success:true,msg:'Email id available'});
      } 
    });  
}   

const isPhoneExist = async(req, res) => {  
  const phoneCheck = await  Company.find({ phone:req.body.phone })
  .then(result => {
    if(result.length!=0){
      res.status(200).send({success:false,msg:'Phone no exist'});
    }else{ 
      res.status(200).send({success:true,msg:'Phone no available'});
    } 
  });  
}  

 
 
module.exports = {
  getStates, 
  getCities,
  isEmailExist,
  isPhoneExist
}