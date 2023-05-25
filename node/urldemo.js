var http = require("http")
var url = require("url")

//http://localhost:5000/player?name=virat&mode=oneday
//below will execute for each and every request
var server = http.createServer(function(request,response){
    var page = url.parse(request.url,true);
    console.log('we got request for ' + page.href);
    console.log('query string has ');
    console.log(page.query);
    var data = page.query;
    console.log(data['name']);
    console.log(data['mode']);
    response.writeHead(200,{'content-type':'application/json'});
    if(data['name']=='sachin' && data['mode']=='test')
    {
        data = JSON.stringify({'match':125,'runs':25000,'century':49});
    }
    else if(data['name']=='sachin' && data['mode']=='oneday')
    {
        data = JSON.stringify({'match':400,'runs':32000,'century':51});
    }
    else if(data['name']=='virat' && data['mode']=='test')
    {
        data = JSON.stringify({'match':80,'runs':18000,'century':25});
    }
    else if(data['name']== 'virat' && data['mode']=='oneday')
    {
        data = JSON.stringify({'match':300,'runs':25000,'century':40});
    }
    else 
    {
        data = JSON.stringify({'error':'invalid request'});
    }
    response.write(data);
    response.end();
});
server.listen(5000,function(error){
    if(error==null)
        console.log('ready to accept request');
});
