const Company = require('../models/company');  
const Country = require('../models/country');  
// Company list
const companyList = async(req, res) => {   
  Company.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('company/company_list', { companies: result, title: 'All Company' });
    })
    .catch(err => {
      console.log(err);
    });
} 

// add company view
const addCompany = async(req, res) => { 
  const countries = await  Country.find({ }).sort({ name: 1 }); 
  res.render('company/add_company', { countries: countries,title: 'Create a new Company' });
}  

// add company process
const addCompanyProcess = (req, res) => { 
  const logoName = '';
  if (req.files) {
    const { image } = req.files; 
    // If no image submitted, exit
    if (!image) return res.sendStatus(400); 
    // Move the uploaded image to our upload folder
    image.mv('./upload/companylogo/' + image.name);
    logoName = image.name;
  } 
  const companyData  = {
    logo: logoName,
    companyname: req.body.companyname,
    email: req.body.email,
    phone: req.body.phone,
    website: req.body.website,
    address: req.body.address,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    pincode: req.body.pincode,
    bankname: req.body.bankname,
    account_number: req.body.account_number,
    gstin_number: req.body.gstin_number,
    pan_number: req.body.pan_number 
  }; 

  const company = new Company(companyData);
  company.save()
  .then(result => {
      res.redirect('/company/manage-company');
  })
  .catch(err => {
      console.log(err);
  });
}

// edit company view
const companyDetails = (req, res) => {
  const id = req.params.id;
  Company.findById(id)
    .then(result => {
      res.render('company/company_details', { company: result, title: 'Company Details' });
    })
    .catch(err => {
      console.log(err);
    });
}  

// edit company process
const  editCompanyProcess = (req, res) => {  

  /* Company.updateOne ({ _id: req.params.id }, {$set: {
    companyname: req.body.companyname,
    email: req.body.email,
    phone: req.body.phone,
    website: req.body.website,
    address: req.body.address,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    pincode: req.body.pincode,
    bankname: req.body.bankname,
    account_number: req.body.account_number,
    gstin_number: req.body.gstin_number,
    pan_number: req.body.pan_number 
  }}, function (err, result) {
      if (err) {
        res.redirect('/company/manage-company');
      } else { 
      res.redirect('/company/manage-company');
  }
  }); */
  let logoName = '';
  if (req.files) {
    const { image } = req.files; 
    // If no image submitted, exit
    if (!image) return res.sendStatus(400); 
    // Move the uploaded image to our upload folder
    image.mv('./upload/companylogo/' + image.name);
    logoName = image.name;
  } 

  Company.findByIdAndUpdate(req.params.id, {
      logo: logoName,
      companyname: req.body.companyname,
      email: req.body.email,
      phone: req.body.phone,
      website: req.body.website,
      address: req.body.address,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
      pincode: req.body.pincode,
      bankname: req.body.bankname,
      account_number: req.body.account_number,
      gstin_number: req.body.gstin_number,
      pan_number: req.body.pan_number 
      }, function(err, data) {
      if(err){ 
          console.log(err);
      } else { 
          res.redirect('/company/manage-company');
      }
 });   
}

// delete company process
const companyDelete = (req, res) => {
  const id = req.params.id;
  Company.findByIdAndDelete(id)
    .then(result => {
      res.redirect('/company/manage-company');
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  companyList, 
  companyDetails, 
  addCompany, 
  addCompanyProcess,
  editCompanyProcess, 
  companyDelete
}