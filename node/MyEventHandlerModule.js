var events = require("events");
var em = new events.EventEmitter();

//1st way to define event handler 
em.on("Login",(data) => {
    console.log('Login event generated with ' + data);
});

em.on("Login",(data) => {
    console.log('another function for Login event generated with ' + data);
});

//2nd way to define event handler 
em.addListener("Logout",function(data){
    console.log('Logout event generated with ' + data);
});

em.addListener("Logout",function(data){
    console.log('another function for Logout event generated with ' + data);
});

module.exports.em = em;