var express = require("express");
var fs = require('fs');
var app = express();
//below function will execute before any route handler function execute 
app.use(function(request,response,next){
    console.log('first middleware function has been executed....');
    var url = request.url;
    var method = request.method;
    var current = new Date();
    var today = current.getDate();
    var month = current.getMonth() + 1;
    var year = current.getFullYear();
    var hour = current.getHours();
    var minute = current.getMinutes();
    var seconds = current.getSeconds();''
    var message = `url = ${url} method = ${method} date ${today}-${month}-${year} time ${hour}:${minute}:${seconds} \n`;
    console.log(message);
    fs.appendFile('log.txt',message,function(error){
        if(error!=null)
        {
            console.log(error.message);
        }
    });
    next();
})
//another middleware 

app.use(function(request,response,next){
    console.log('second middleware function has been executed....');
    next();
});

app.get("/home",function(request,response){
    response.send("home page request received");
});

app.get("/aboutus",function(request,response){
    response.send("aboutus page request received");
});

app.get("/products",function(request,response){
    response.send("products page request received");
});

app.listen(5000);
console.log('ready to accept request');