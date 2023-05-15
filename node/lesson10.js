var http = require("http");
var server = http.createServer(function(request,response){
    var url = request.url;
    response.writeHead(200,{'content-type':'text/html'});
    if(url == '/')
    {
        response.write("<html><head></head><body><h1>Home</h1></body></html>");
    }
    else if(url == '/fruits')
    {
        response.write('<html><head></head><body><h1>Fruits</h1><ul><li>Apple</li><li>Banana</li><li>Mango</li></ul></body></html>');
    }
    else if(url == '/vegitables')
    {
        response.write('<html><head></head><body><h1>Vegitables</h1><ul><li>Potato</li><li>Tomato</li><li>Lady finger</li></ul></body></html>');
    }
    response.end();
});

server.listen(5000);
console.log('ready to accept request.....');