var my = require ("./MyEventHandlerModule3");
my.em.emit("Login","Meet Italiya - teacher");
my.em.emit("Logout","Meet Italiya - teacher");

my.em.emit("Login","Monika Jajadiya - teacher");  //will be ignored
my.em.emit("Logout","Monika Jajadiya - teacher"); //will be ignored
