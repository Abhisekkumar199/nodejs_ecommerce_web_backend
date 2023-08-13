const express = require('express'); 
const fileUpload = require('express-fileupload');
const morgan =require('morgan');
const res = require('express/lib/response');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + '/assets')); 
app.use("/upload",express.static('upload'));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));  
app.use(bodyParser.json());
app.use(fileUpload()); 
app.use(express.static('public'));

// To connect with your mongoDB database
const mongoose = require("mongoose");
// Connecting to database
mongoose.set('strictQuery', true);
mongoose.connect(
  "mongodb://127.0.0.1:27017/",
  { dbName: "ecommerce", useNewUrlParser: true, useUnifiedTopology: true }, 
  (err) => err ? console.log(err) : console.log("Connected to database")
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
 

// routes
const companyRoutes = require('./routes/companyRoutes'); 
const ajaxRoutes = require('./routes/ajaxRoutes'); 
const { urlencoded } = require('express');
app.use('/company', companyRoutes);   
app.use('/ajax', ajaxRoutes);   
app.get('/',(req,res) =>{
    res.render('dashboard');
});


//var seeder = require('./location');
//seeder.saveCountries(); 
//seeder.saveStates(); 
//seeder.saveCities();
app.listen(3000);
