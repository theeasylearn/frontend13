var http = require("http");
var server = http.createServer(function(request,response){
    var url = request.url;
    response.writeHead(200,{'content-type':'application/json'});
    var data = null;
    if(url == '/meet')
    {
        data = JSON.stringify({
            'name':'meet',
            'gender':true, 
            'age':19,
            'email':'meet@gmail.com'
        });
    }
    else if(url == '/zelix')
    {
        data = JSON.stringify({
            'name':'zelix',
            'gender':false, 
            'age':19,
            'email':'zelix@gmail.com', 
            'country':'india'
        });
    }
    else if(url == '/monika')
    {
        data = JSON.stringify({
            'name':'monika',
            'gender':false, 
            'email':'monika@gmail.com',
            'city':'bhavnagar'
        });
    }
    else 
    {
        data = JSON.stringify({
            'error':'no person found'
        });
    }
    response.write(data);
    response.end();
});
server.listen(5000);
console.log('ready to accept request.....');