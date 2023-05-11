//use of external module 
//var variable = require('./localmodulename')
var mymodule = require('./mymodule1');
var countries = mymodule.getCountries();
console.log(countries);

var states = mymodule.getStates();
console.log(states);