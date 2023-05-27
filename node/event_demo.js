var events = require("events");
var em = new events.EventEmitter();

//1st way to define event handler 
em.on("Login",(data) => {
    console.log('Login event generated with ' + data);
});

//2nd way to define event handler 
em.addListener("Logout",function(data){
    console.log('Logout event generated with ' + data);
});

em.emit("Login","Ajay Patel - admin");
em.emit("Login","Diya Patel - student");

em.emit("Logout","Ajay Patel - admin");
em.emit("Logout","Diya Patel - student");

