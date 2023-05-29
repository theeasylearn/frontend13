var events = require("events");
var em = new events.EventEmitter();
var MyLogin = function(data){
    console.log('Login event generated with ' + data);
}
var MyLogout = function(data){
    console.log('Logout event generated with ' + data);
}
em.once("Login",MyLogin);
em.once("Logout",MyLogout);

module.exports.em = em;
