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

app.get("/players/:surname",function(request,response){
    var surname = request.params.surname;
    var index = 0;
    var result = [];     //empty array 
    while(index<5)
    {
        if (surname == players[index]['surname'])
        {
            result.push(players[index]); 
        }
        index++;
    }

    if(result.length == 0)
        response.json({'message':'no player found'})
    else 
        response.send(result);
});

app.get("/players/:name/:surname",function(request,response){
    var name = request.params.name;
    var surname = request.params.surname;
    var player_to_search = {'name':name,'surname':surname};
    //console.log(player_to_search);
    var result = players.filter((player) => {
        if( JSON.stringify(player) === JSON.stringify(player_to_search) )
            return player;
    });
    if(result.length == 0)
        response.json({'message':'no player found'});
    else
        response.send(result);
});
app.listen(5000);
console.log('ready to accept request');
