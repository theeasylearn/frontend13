var events = require("events");
var em = new events.EventEmitter();
var MyLogin = function(data){
    console.log('Login event generated with ' + data);
}
var MyAnotherLogin = function(data){
    console.log('another function for Login event generated with ' + data);
}
em.on("Login",MyLogin);
em.addListener("Login",MyAnotherLogin);
var MyLogout = function(data){
    console.log('Logout event generated with ' + data);
}
var MyAnotherLogout = function(data){
    console.log('another function for Logout event generated with ' + data);
}
em.on("Logout",MyLogout);
em.addListener("Logout",MyAnotherLogout);

module.exports.em = em;
module.exports.MyAnotherLogin = MyAnotherLogin;
module.exports.MyAnotherLogout = MyAnotherLogout;