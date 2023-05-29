var my = require ("./MyEventHandlerModule2");
my.em.emit("Login","Meet Italiya - teacher");
my.em.emit("Logout","Meet Italiya - teacher");

my.em.removeListener("Login",my.MyAnotherLogin);
my.em.removeListener("Logout",my.MyAnotherLogout);

my.em.emit("Login","Monika Jajadiya - teacher");
my.em.emit("Logout","Monika Jajadiya - teacher");
