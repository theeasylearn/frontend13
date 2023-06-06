var express = require('express');
var app = new express()

var players = [
    {'name':'rohit','surname':'sharma'},
    {'name':'ishant','surname':'sharma'},
    {'name':'mohit','surname':'sharma'},
    {'name':'sachin','surname':'tendulkar'},
    {'name':'rahul','surname':'dravid'}
];
//static route
//localhost:5000/players 
app.get("/players",function(request,response){
    response.json(players);
});

//localhost:5000/players/rohit 

app.get("/players/:name",function(request,response){
    var name = request.params.name;
    var index = 0;
    while(index<5)
    {
        if (name == players[index]['name'])
        {
            response.json(players[index]);
            break;
        }
        index++;
    }
    if(index==5)
        response.json({'message':'no player found'})
});
app.listen(5000);
console.log('ready to accept request');
