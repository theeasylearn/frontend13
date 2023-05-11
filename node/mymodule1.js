// example of local module 
function getCountries()
{
    var countries = ['India','US','UK','France','Japan'];
    return countries;
}
function getStates()
{
    var states = ['gujarat','maharastra','madhya pradesh','tamil nadu','rajasthan'];
    return states;
}
//export above function 
//modules.export.alias = functionname
module.exports.getCountries = getCountries;
module.exports.getStates = getStates;
