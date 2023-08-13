var async = require("async"); 

var countries = require('./upload/countries');
var states = require('./upload/states');
var cities = require('./upload/cities');  
  
const Country = require('../models/country');  
const State = require('../models/state');  
const City = require('../models/city');  

async function _saveCountries() {
async
    .each(countries, function iteratee(country, next) {
    var cn = new Country({_id: country.id, sortname: country.sortname, name: country.name})

    cn.save(function (err, res) {
        next();
    })
    }, function () {
    console.log("================= All Countries loaded ===================");
    })
}

async function _saveStates() {
  var countries = await Country.find();

  async.each(countries, function iteratee(country, nextCountry) {

    console.log("==========Started " + country.name + "==============")

    async.each(states, function iteratee(state, next) {

      if (state.country_id == (country.id + '')) {
        var st = new State({_id: state.id, name: state.name, country: country})

        st.save(function (err, res) {
          country
            .states
            .push(st)
          country.save(function (er, resp) {
            next()
          })
        })

      } else {
        next();
      }

    }, function () {
      console.log("All States Done")
      console.log("========== Ended " + country.name + "==============")
    })

  }, function () {
    console.log("All Countries Done")
  })
}

async function _saveCities() {
  var states = await State.find()
console.log('sfsfsf');
  async.each(states, function iteratee(state, nextState) {

    console.log("==========Started " + state.name + "==============")

    async.each(cities, function iteratee(city, next) {

      if (city.state_id == (state.id + '')) {
        var ct = new City({_id: city.id, name: city.name, state: state})

        ct.save(function (err, res) {
          state
            .cities
            .push(ct)
          state.save(function (er, resp) {
            next()
          })
        })

      } else {
        next();
      }

    }, function () {
      console.log("All Cities Done")
      console.log("========== Ended " + state.name + "==============")
    })

  }, function () {
    console.log("All States Done")
  })
} 

module.exports = {
  saveStates: function () {
    _saveStates();
  },
  saveCities: function () {
    _saveCities();
  },
  saveCountries: function () {
    _saveCountries()
  },
  Country: Country,
  State: State,
  City: City
}

