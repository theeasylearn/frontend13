var http = require("http");
var server = http.createServer(function(request,response){
    console.log('we got new request');
});
server.listen(5000,function(error){
    console.log('server is started....');
});