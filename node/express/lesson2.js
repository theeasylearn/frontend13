var express = require('express')
var app = new express()

//get request 
app.get("/contact",function(request,response){
    response.send('get request for contact received');
});

app.post("/contact",function(request,response){
    response.send('post request for contact received');
});

app.put("/contact",function(request,response){
    response.send('put request for contact received');
});

app.delete("/contact",function(request,response){
    response.send('delete request for contact received');
});

app.listen(5000,function(error){
    if(error)
        console.log('error in accept request');
    else 
        console.log('ready to accept request');
});