var express = require("express");
var app = new express();
var fs = require('fs');
//create route 
//localhost:5000/home 
app.get("/home",function(request,response){
    response.send('home page request received');
});

//localhost:5000/aboutus
app.get("/aboutus",function(request,response){
    response.send('about us page request received...');
});

//localhost:5000/course
app.get("/course",function(request,response){
    response.json({'name':'Node js','duration':30,'teacher':'Ankit Patel'});
});

//localhost:5000/courses
app.get("/courses",function(request,response){
    response.json([{'name':'Node js','duration':30,'teacher':'Ankit Patel'},{'name':'React js','duration':35,'teacher':'Ankit Patel'},{'name':'Bootstrap','duration':15,'teacher':'Param Patel'}]);
});

//localhost:5000/contactus
app.get("/contactus",function(request,response){
    var filename = '../contactus.html';
    fs.readFile(filename,function(error,content){
        if(error!=null)
            response.send('file can not be read');
        else 
            response.send(content.toString());
    });
});
app.listen(5000,function(error){
    if(error==null) //no error
        console.log('ready to accept request on port no 5000');
});